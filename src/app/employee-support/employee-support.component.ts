import { Component } from '@angular/core';
import {AppModeService} from "../app-mode.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-employee-support',
  templateUrl: './employee-support.component.html',
  styleUrls: ['./employee-support.component.css']
})
export class EmployeeSupportComponent {

  constructor(
    private appModeService: AppModeService,
    private router: Router) {
  }

  Logout() {
    this.router.navigate(['/login']);
  }

  EmployeeFAQ() {
    this.router.navigate(['/employeeFAQ']);
  }
  EmployeeContact () {
    this.router.navigate(['/employeeContact']);
  }

}
