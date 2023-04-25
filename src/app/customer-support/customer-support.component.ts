import { Component } from '@angular/core';
import {TransactionService} from "../transaction/transaction.service";
import {AppModeService} from "../app-mode.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-customer-support',
  templateUrl: './customer-support.component.html',
  styleUrls: ['./customer-support.component.css']
})
export class CustomerSupportComponent {
  constructor(
              private appModeService: AppModeService,
              private router: Router) {
  }

  Logout() {
    this.router.navigate(['/login']);
  }

  CustomerContact() {
    this.router.navigate(['/customerContact']);
  }
  CustomerFAQ () {
    this.router.navigate(['/customerFAQ']);
  }
  ViewTransactions() {
    this.router.navigate(['transactions']);
  }
  Budget() {
    this.router.navigate(['/budget'])
  }

}
