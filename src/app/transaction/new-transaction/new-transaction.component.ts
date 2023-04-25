import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Transaction} from "../transaction";
import {TransactionService} from "../transaction.service";
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import {ActivatedRoute, Router} from "@angular/router";
import {Customer} from "../../customer/customer";
import {CustomerService} from "../../customer/customer.service";


@Component({
  selector: 'app-profile-editor',
  templateUrl: './new-transaction.component.html',
  styleUrls: ['./new-transaction.component.css']
})
export class NewTransactionComponent implements  OnInit {
  protected transactionDetails: any | undefined;
  protected submitted: boolean | undefined;
  protected editable: boolean | undefined;

  protected customer: any;
  protected customers: any = [];
  protected numberOfCustomers: number = 0;
  protected selectedPayee: any;
  protected selectedTransactionType: any;

  protected CASH_DEPOSIT: string = "CASH_DEPOSIT";
  protected CASH_WITHDRAWAL: string = "CASH_WITHDRAWAL";
  protected ACCOUNT_TO_ACCOUNT: string = "ACCOUNT_TO_ACCOUNT";

  constructor(private transactionService: TransactionService,
              private formBuilder: RxFormBuilder,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.transactionDetails = new FormGroup({
      payee: new FormControl('', [
        Validators.required,
        Validators.pattern(/[\S]/)
      ]),
      currency: new FormControl('', [
        Validators.required,
        Validators.pattern(/[\S]/)
      ]),
      amount: new FormControl('', [
        Validators.required,
        Validators.pattern(/[\S]/)
      ]),
      transactionDescription: new FormControl('', [
        Validators.required,
        Validators.pattern(/[\S]/)
      ]),
      transactionType: new FormControl('', [
        Validators.required,
        Validators.pattern(/[\S]/)
      ])
    });

    this.submitted = false;
    this.editable = true;

    console.log(history.state);
    // @ts-ignore
    let customer = Object.assign(new Customer(), history.state)
    this.customer = customer ;

    this.customerService.getAll().subscribe((data: any) => {
      this.customers = data;
      this.numberOfCustomers = this.customers.length;
      console.log(JSON.stringify(data, null, 2));
    })
  }
  onSubmit(customer: Customer) {
    this.submitted = true;
    // @ts-ignore
    if (this.transactionDetails.invalid) {
      return;
    }
    // @ts-ignore
    let transaction = Object.assign(new Transaction(), this.transactionDetails.value)
    transaction.payer = customer;
    if(transaction.getTransactionType() === this.CASH_DEPOSIT) {
      transaction.payer = null;
    }
    if(transaction.getTransactionType() === this.CASH_WITHDRAWAL) {
      transaction.payee = null;
    }

    this.transactionService.create(transaction).subscribe((persistedTransaction: any) => {
     // this.transactionDetails = this.formBuilder.formGroup(transaction, persistedTransaction);
      this.editable = false;
      this.submitted = false;
      this.customerService.find(customer.getCustomerId()).subscribe((data: any) => {
        this.customer = data;
        this.router.navigate(['/transactions'], {state: this.customer})
        console.log(JSON.stringify(data, null, 2));
      })


      console.log(JSON.stringify(persistedTransaction, null, 2));
    });
  }
  onReset(): void {
    this.submitted = false;
    this.editable = true;
    // @ts-ignore
    this.transactionDetails.reset();
  }

  onCancel(customer: Customer) {
    this.router.navigate(['transactions'], {state: customer});
  }

  onChangePayee(selectedPayee: any, e: any) {
    console.log(e.target.value);
    console.log(selectedPayee);
  }

  onChangeTransactionType(selectedTransactionType: any, e: any) {
    console.log(e.target.value);
    console.log(selectedTransactionType);
  }
}
