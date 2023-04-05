export class Transaction {
  private payee: string;
  private  accountNumber: string;
  private  currency: string;
  private transactionName: string;
  private sortcode : string;
  private  amount: number;

  constructor(payee: string, accountNumber: string, currency: string, amount: number, sortcode: string , transactionName: string) {
    this.payee = payee;
    this.accountNumber = accountNumber;
    this.currency = currency;
    this.amount = amount;
    this.sortcode = sortcode;
    this.transactionName = transactionName;
  }

  public getTransactionName(): string {
    return this.transactionName;
  }

  public setTransactionName( transactionName : string ) {
    this.transactionName = transactionName;
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
  public getamount(): number {
    return this.amount;
  }

  public setamount( amount : number ) {
    this.amount = amount;
  }
  public getSortCode(): string {
    return this.sortcode;
  }

  public setSortCode( sortcode : string ) {
    this.sortcode = sortcode;
  }
  public getPayee(): string {
    return this.payee;
  }

  public setPayee( payee : string ) {
    this.payee = payee;
  }
}
