import {required} from "@rxweb/reactive-form-validators";

export class Login {

  @required()
  private loginId: string;

  @required()
  private password: string;

  constructor( loginId: string, password: string) {
    this.loginId = loginId;
    this.password = password;
  }

  public getLoginId(): string {
    return this.loginId;
  }

  public setLoginId( loginId : string ) {
    this.loginId = loginId;
  }

  public getPassword(): string {
    return this.password;
  }

  public setPassword( password : string ) {
    this.password = password;
  }
}
