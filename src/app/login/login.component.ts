import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Login} from "./login";
import {Router} from "@angular/router";
import {LoginService} from "./login.service";
import {Customer} from "../customer/customer";
import {AppModeService} from "../app-mode.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  protected loginDetails: any | undefined;
  protected submitted: boolean | undefined;
  protected editable: boolean | undefined;

  constructor(private loginService: LoginService,
              private appModeService : AppModeService,
              private router: Router) {
  }
  ngOnInit(): void {
    this.loginDetails = new FormGroup({
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
  }

  onReset(): void {
    this.submitted = false;
    this.editable = true;
    // @ts-ignore
    this.loginDetails.reset();
  }

  onSubmit() {
    this.submitted = true;
    // @ts-ignore
    if (this.loginDetails.invalid) {
      return;
    }
    // @ts-ignore
    let login = Object.assign(new Login(), this.loginDetails.value)
    this.loginService.login(login).subscribe((data: any ) => {
      this.editable = false;
      this.submitted = false;
      if(![null,undefined].includes(data.customerId) && data.loginId !== "admin") {
        this.appModeService.updateApplicationMode("customer");
          // @ts-ignore
          let customer = Object.assign(new Customer(), data)
          this.router.navigate(['transactions'], {state: customer});
      } else if(![null,undefined].includes(data.loginId) && data.loginId === "admin") {
        this.appModeService.updateApplicationMode("admin");
        this.router.navigate(['/customers'])
      }  else {
        this.appModeService.updateApplicationMode("error");
        this.router.navigate(['/login'])
      }

    });
  }

}
