import {required} from "@rxweb/reactive-form-validators";
import {Customer} from "../customer/customer";

export class Transaction {
  private  transactionId: String;
  @required()
  private payee: Customer;
  @required()
  private payer: Customer;

  @required()
  private  currency: string;
  @required()
  private transactionDescription: string;

  @required()
  private  amount: number;

  @required()
  private payeeBalance: number;

  @required()
  private payerBalance: number;

  private transactionTimestamp: any;

  private transactionType: String;


  constructor(payee: Customer,  payer: Customer, currency: string, amount: number,
              transactionDescription: string, transactionId: String, payeeBalance : number,
              payerBalance: number , transactionTimestamp: any,transactionType :string) {
    this.currency = currency;
    this.amount = amount;
    this.transactionDescription = transactionDescription;
    this.transactionId = transactionId;
    this.payer = payer;
    this.payee = payee;
    this.payeeBalance = payeeBalance;
    this.payerBalance = payerBalance;
    this.transactionTimestamp = transactionTimestamp ;
    this.transactionType = transactionType;
  }

  public getTransactionDescription(): string {
    return this.transactionDescription;
  }

  public setTransactionDescription( transactionDescription : string ) {
    this.transactionDescription = transactionDescription;
  }

  public getCurrency(): string {
    return this.currency;
  }

  public setCurrency( currency : string ) {
    this.currency = currency;
  }
  public getAmount(): number {
    return this.amount;
  }

  public setAmount( amount : number ) {
    this.amount = amount;
  }

  public getPayee(): Customer {
    return this.payee;
  }

  public setPayee( payee : Customer ) {
    this.payee = payee;
  }

  public getPayer(): Customer {
    return this.payer;
  }

  public setPayer( payer : Customer ) {
    this.payer = payer;
  }

  public getPayeeBalance(): number {
    return this.payeeBalance;
  }

  public setPayeeBalance( payeeBalance : number ) {
    this.payeeBalance = payeeBalance;
  }

  public getPayerBalance(): number {
    return this.payerBalance;
  }

  public setPayerBalance( payerBalance : number ) {
    this.payerBalance = payerBalance;
  }

  public getTransactionTimestamp(): any {
    return this.transactionTimestamp;
  }

  public setTransactionTimestamp( transactionTimestamp : any ) {
    this.transactionTimestamp = transactionTimestamp;
  }

  public getTransactionType(): any {
    return this.transactionType;
  }

  public setTransactionType( transactionType : any ) {
    this.transactionType = transactionType;
  }
}
