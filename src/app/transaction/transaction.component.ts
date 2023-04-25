import {Component, OnDestroy, OnInit} from '@angular/core';
import {TransactionService} from "./transaction.service";
import {Router} from "@angular/router";
import {BehaviorSubject, first, Observable} from "rxjs";
import {HttpHeaders} from "@angular/common/http";
import {Transaction} from "./transaction";
import {FormGroup} from "@angular/forms";
import {RxFormBuilder} from "@rxweb/reactive-form-validators";
import {Customer} from "../customer/customer";
import {AppComponent} from "../app.component";
import {AppModeService} from "../app-mode.service";

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements  OnInit, OnDestroy{
  protected  transactions: any = [];
  protected payer: any;
  protected numberOfTransactions : number = 0;
  private transactionDetails: any;

  protected showViewCustomer: boolean = false ;
  constructor(private transactionService: TransactionService,
              private appModeService: AppModeService,
              private router: Router) {
  }

  ngOnInit() {
    console.log(history.state);
    this.showViewCustomer = this.appModeService.isAdminMode();
    // @ts-ignore
    let customer = Object.assign(new Customer(), history.state)
    this.payer = customer;
    this.transactionService.getAll(customer.getCustomerId()).subscribe( (data: any) => {
      this.transactions = data;
      this.transactions.forEach((currentTransaction: { payer: any; payee: any;})=> {
        if(!currentTransaction.payer) {
          currentTransaction.payer = {
            "customerName" : "Cash Deposit"
          };
        }
        if(!currentTransaction.payee) {
          currentTransaction.payee = {
            "customerName" : "Cash Withdrawal"
          };
        }
      });
      this.numberOfTransactions = this.transactions.length;
      console.log(JSON.stringify(data, null, 2));
    })
  }
  ngOnDestroy(): void {
  }

  addNewTransaction(customer: Customer) :void {
    this.router.navigate(['new-transaction'],{state: customer});
  }

  onDelete(transaction: any) :void {
    this.transactionService.delete(transaction.transactionId).subscribe({
      next: data => {
        if(data === 'Deleted') {
          this.ngOnInit();
        }
      },
      error: error => {
        console.error('There was an error!', error);
      }
    })
  }
    onEdit(transaction: any) :void {
      this.router.navigate(['edit-transaction'], {state: transaction});

    }

    onViewCustomers() {
      this.router.navigate(['customers']);
    }
    Logout() {
    this.router.navigate(['login']);
    }
    CustomerSupport () {
      this.router.navigate(['customerSupport']);
    }
    Budget() {
      this.router.navigate(['budget']);
    }
}
