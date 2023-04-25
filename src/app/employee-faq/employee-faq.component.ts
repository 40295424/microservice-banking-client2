import { Component } from '@angular/core';
import {AppModeService} from "../app-mode.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-employee-faq',
  templateUrl: './employee-faq.component.html',
  styleUrls: ['./employee-faq.component.css']
})
export class EmployeeFAQComponent {
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
  EmployeeContact () {
    this.router.navigate(['/employeeContact']);
  }

}


