import {required, prop, propObject, propArray, pattern} from "@rxweb/reactive-form-validators";

export class Customer {
  private  customerId: String;
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


  constructor(customerName: string, accountNumber: string,
              currency: string, bankBalance: number, sortcode: string,
              customerId: string) {
    this.customerName = customerName;
    this.accountNumber = accountNumber;
    this.currency = currency;
    this.bankBalance = bankBalance;
    this.sortcode = sortcode;
    this.customerId = customerId;
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
}
