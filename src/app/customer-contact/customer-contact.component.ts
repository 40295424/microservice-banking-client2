import { Component } from '@angular/core';
import {AppModeService} from "../app-mode.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-customer-contact',
  templateUrl: './customer-contact.component.html',
  styleUrls: ['./customer-contact.component.css']
})



export class CustomerContactComponent {
  constructor(
    private appModeService: AppModeService,
    private router: Router) {
  }

  Logout() {
    this.router.navigate(['login']);
  }

  CustomerSupport() {
    this.router.navigate(['customerSupport']);
  }
  CustomerFAQ () {
    this.router.navigate(['customerFAQ']);
  }
  ViewTransactions() {
    this.router.navigate(['transactions']);
  }
  Budget() {
    this.router.navigate(['/budget'])
  }

}

