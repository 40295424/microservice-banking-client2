import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../customer.service";
import {RxFormBuilder} from "@rxweb/reactive-form-validators";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Customer} from "../customer";

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements  OnInit {

  protected customerDetails: any | undefined;
  protected submitted: boolean | undefined;
  protected editable: boolean | undefined;

  constructor(private customerService: CustomerService,
              private formBuilder: RxFormBuilder,
              private router: Router) {
  }

  ngOnInit(): void {
    this.customerDetails = new FormGroup({
      customerId: new FormControl('', [
        Validators.required,
        Validators.pattern(/[\S]/)
      ]),
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
      ]),
      loginId: new FormControl('', [
        Validators.required,
        Validators.pattern(/[\S]/)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(/[\S]/)
      ])
    });

    this.submitted = false;
    this.editable = true;
    console.log(history.state);
    // @ts-ignore
    let customer = Object.assign(new Customer(), history.state)
    this.customerDetails.setValue(customer);
  }

  onSubmit() :void {
    this.submitted = true;
    // @ts-ignore
    if (this.customerDetails.invalid) {
      return;
    }
    // @ts-ignore
    let customer = Object.assign(new Customer(), this.customerDetails.value)
    this.customerService.update(customer.customerId, customer).subscribe({
      next: data => {
        this.router.navigate(['/customers'])
      },
      error: error => {
        console.error('There was an error!', error);
      }
    })

  }

  onCancel() {
    this.router.navigate(['/customers'])
  }

}
