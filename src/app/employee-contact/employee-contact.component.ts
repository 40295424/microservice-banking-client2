import { Component } from '@angular/core';
import {AppModeService} from "../app-mode.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-employee-contact',
  templateUrl: './employee-contact.component.html',
  styleUrls: ['./employee-contact.component.css']
})
export class EmployeeContactComponent {

  constructor(
    private appModeService: AppModeService,
    private router: Router) {
}
  Logout() {
    this.router.navigate(['/login']);
  }

  EmployeeSupport() {
    this.router.navigate(['/employeeSupport']);
  }
  EmployeeFAQ () {
    this.router.navigate(['/employeeFAQ']);
  }

}



