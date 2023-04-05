import {Component, OnDestroy, OnInit} from '@angular/core';
import {CustomerService} from "./customer.service";
import {Router} from "@angular/router";
import {BehaviorSubject, first, Observable} from "rxjs";
import {HttpHeaders} from "@angular/common/http";
import {Customer} from "./customer";
import {FormGroup} from "@angular/forms";
import {RxFormBuilder} from "@rxweb/reactive-form-validators";


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements  OnInit, OnDestroy {
  protected customers: any = [];
  protected numberOfCustomers: number = 0;
  private customerDetails: any;


  constructor(private customerService: CustomerService,
              private router: Router) {
  }

  ngOnInit() {
    this.customerService.getAll().subscribe((data: any) => {
      this.customers = data;
      this.numberOfCustomers = this.customers.length;
      console.log(JSON.stringify(data, null, 2));
    })
  }

  ngOnDestroy(): void {
  }

  onDelete(customer: any) :void {
    this.customerService.delete(customer.customerId).subscribe({
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
  onEdit(customer: any) :void {
    this.customerService.update(customer.customerId, customer).subscribe({
      next: data => {
        if(data === 'Updated ') {
          this.ngOnInit();
        }
      },
      error: error => {
        console.error('There was an error!', error);
      }
    })

  }
  addNewCustomer() :void {
    this.router.navigate(['new-customer']);
  }
}
