import {required, prop, propObject, propArray, pattern}
  from "@rxweb/reactive-form-validators";

export class Customer {

  private customerId: string;
  @required()
  private customerName: string;
  @required()
  private  accountNumber: string;
  @required()
  private  currency: string;
  @required()
  private bankBalance: number;
  @required()
  private  sortcode: string;

  @required()
  private loginId: string;

  @required()
  private password: string;


  constructor(customerName: string, accountNumber: string,
              currency: string, bankBalance: number, sortcode: string,
              customerId: string, loginId: string, password: string) {
    this.customerName = customerName;
    this.accountNumber = accountNumber;
    this.currency = currency;
    this.bankBalance = bankBalance;
    this.sortcode = sortcode;
    this.customerId = customerId;
    this.loginId = loginId;
    this.password = password;
  }


  public getCustomerName(): string {
    return this.customerName;
  }

  public setCustiomerName( customerName : string ) {
    this.customerName = customerName;
  }
  public getAccountNumber(): string {
    return this.accountNumber;
  }
  public setAccountNumber( accountNumber : string ) {
    this.accountNumber = accountNumber;
  }
  public getCurrency(): string {
    return this.currency;
  }
  public setCurrency( currency : string ) {
    this.currency = currency;
  }
  public getBankBalance(): number {
    return this.bankBalance;
  }
  public setBankBalance( bankBalance : number ) {
    this.bankBalance = bankBalance;
  }
  public getSortCode(): string {
    return this.sortcode;
  }
  public setSortCode(  sortcode : string ) {
    this.sortcode = sortcode;
  }

  public getCustomerId(): string {
    return this.customerId;
  }

  public setCustomerId(value: string) {
    this.customerId = value;
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
