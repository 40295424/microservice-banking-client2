import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Customer} from "../customer";
import {CustomerService} from "../customer.service";
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import {Router} from "@angular/router";


@Component({
  selector: 'app-profile-editor',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent implements  OnInit {
  protected customerDetails: any | undefined;
  protected submitted: boolean | undefined;
  protected editable: boolean | undefined;

  constructor(private customerService: CustomerService,
              private formBuilder: RxFormBuilder,
              private router: Router) {
  }

  ngOnInit(): void {
    this.customerDetails = new FormGroup({
      customerName: new FormControl('', [
        Validators.required,
        Validators.pattern(/[\S]/)
      ]),
      accountNumber: new FormControl('', [
        Validators.required,
        Validators.pattern(/[\S]/)
      ]),
      currency: new FormControl('', [
        Validators.required,
        Validators.pattern(/[\S]/)
      ]),
      bankBalance: new FormControl('', [
        Validators.required,
        Validators.pattern(/[\S]/)
      ]),
      sortcode: new FormControl('', [
        Validators.required,
        Validators.pattern(/[\S]/)
      ])
    });

    this.submitted = false;
    this.editable = true;
  }


  onSubmit() {
    this.submitted = true;
    // @ts-ignore
    if (this.customerDetails.invalid) {
      return;
    }
    // @ts-ignore
    let customer = Object.assign(new Customer(), this.customerDetails.value)
    this.customerService.create(customer).subscribe((persistedCustomer: any) => {
      this.customerDetails = this.formBuilder.formGroup(Customer, persistedCustomer);
      this.editable = false;
      this.submitted = false;
      this.router.navigate(['/customers'])
      console.log(JSON.stringify(persistedCustomer, null, 2));
    });
  }

  onReset(): void {
    this.submitted = false;
    this.editable = true;
    // @ts-ignore
    this.customerDetails.reset();
  }
}
