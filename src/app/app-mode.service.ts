import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppModeService {

  protected  applicationMode : string = "error";
  constructor() {
  }

  isAdminMode() : boolean{
    return this.applicationMode ===  "admin" ;
  }

  updateApplicationMode(applicationMode: string) {
    this.applicationMode = applicationMode;
  }

}
