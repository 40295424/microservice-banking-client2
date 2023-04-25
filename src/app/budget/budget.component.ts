import { Component } from '@angular/core';
import {AppModeService} from "../app-mode.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent {
  protected customers: any = [];
  constructor(
    private appModeService: AppModeService,
    private router: Router
   ) {
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

}


