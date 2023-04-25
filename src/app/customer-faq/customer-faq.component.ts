import { Component } from '@angular/core';
import {AppModeService} from "../app-mode.service";
import {Router} from "@angular/router";
import {Customer} from "../customer/customer";

@Component({
  selector: 'app-customer-faq',
  templateUrl: './customer-faq.component.html',
  styleUrls: ['./customer-faq.component.css']
})
export class CustomerFAQComponent {
  constructor(
    private appModeService: AppModeService,
    private router: Router) {
  }

  Logout() {
    this.router.navigate(['/login']);
  }

  CustomerSupport() {
    this.router.navigate(['/customerSupport']);
  }
  CustomerContact () {
    this.router.navigate(['/customerContact']);
  }
  ViewTransactions() {
    this.router.navigate(['transactions']);
  }
  Budget() {
    this.router.navigate(['/budget'])
  }

}

