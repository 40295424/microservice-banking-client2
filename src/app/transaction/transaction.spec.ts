import { Transaction } from './transaction';
import {createComponent} from "@angular/core";
import {Customer} from "../customer/customer";

describe('Transaction', () => {
  it('should create an instance', () => {
    let customer =
    new Customer("Kate Salmon","785903756", "GBP", 8492.04, "465728", "2", "kate1", "12")
    let customer1 =
      new Customer("Karen Salmon","785903756", "GBP", 8492.04, "465728", "2", "kate1", "12")
    expect(new Transaction(customer,customer1, "GBP", 8492.04, "465728", "Karen Salmon", customer.getBankBalance(),  customer1.getBankBalance(), "12:00", "CASH_DEPOSIT")).toBeTruthy();
  });

  it('should be able to get transaction description', () => {
    let customer =
      new Customer("Kate Salmon","785903756", "GBP", 8492.04, "465728", "2", "kate1", "12")
    let customer1 =
      new Customer("Karen Salmon","785903756", "GBP", 8492.04, "465728", "2", "kate1", "12")
    let transaction = new Transaction(customer,customer, "GBP", 8492.04, "kate-karen", "Karen Salmon", customer.getBankBalance(),  customer1.getBankBalance(), "12:00", "CASH_DEPOSIT");
    expect(transaction.getTransactionDescription()).toEqual("kate-karen");
  })
  it('should be able to set Transaction Description', () => {
    let customer =
      new Customer("Kate Salmon","785903756", "GBP", 8492.04, "465728", "2", "kate1", "12")
    let customer1 =
      new Customer("Karen Salmon","785903756", "GBP", 8492.04, "465728", "2", "kate1", "12")
    let transaction = new Transaction(customer,customer, "GBP", 8492.04, "kate-karen", "Karen Salmon", customer.getBankBalance(),  customer1.getBankBalance(), "12:00", "CASH_DEPOSIT");
    transaction.setTransactionDescription("karen-kathleen");
    expect(transaction.getTransactionDescription()).toEqual("karen-kathleen");
  })
  it('should be able to get the currency', () => {
    let customer =
      new Customer("Kate Salmon","785903756", "GBP", 8492.04, "465728", "2", "kate1", "12")
    let customer1 =
      new Customer("Karen Salmon","785903756", "GBP", 8492.04, "465728", "2", "kate1", "12")
    let transaction = new Transaction(customer1, customer, "GBP", 8492.04, "karen-kate", "Karen Salmon", customer1.getBankBalance(), customer.getBankBalance(), "12:00", "CASH_DEPOSIT");
    expect( transaction.getCurrency()).toEqual("GBP");
  })
  it('should be able to get the amount', () => {
    let customer =
      new Customer("Kate Salmon","785903756", "GBP", 8492.04, "465728", "2", "kate1", "12")
    let customer1 =
      new Customer("Karen Salmon","785903756", "GBP", 8492.04, "465728", "2", "kate1", "12")
    let transaction = new Transaction(customer1, customer, "GBP", 12, "karen-kate", "Karen Salmon", customer1.getBankBalance(), customer.getBankBalance(), "12:00", "CASH_DEPOSIT");
    expect( transaction.getAmount()).toEqual(12);
  })
  it('should be able to set the amount ', () => {
    let customer =
      new Customer("Kate Salmon","785903756", "GBP", 8492.04, "465728", "2", "kate1", "12")
    let customer1 =
      new Customer("Karen Salmon","785903756", "GBP", 8492.04, "465728", "2", "kate1", "12")
    let transaction = new Transaction(customer1, customer, "GBP", 12, "karen-kate", "Karen Salmon", customer1.getBankBalance(), customer.getBankBalance(), "12:00", "CASH_DEPOSIT");
    transaction.setAmount(13);
    expect( transaction.getAmount()).toEqual(13);
  })
  it('should be able to get the payee name', () => {
    let customer =
      new Customer("Kate Salmon","785903756", "GBP", 8492.04, "465728", "2", "kate1", "12")
    let customer1 =
      new Customer("Karen Salmon","785903756", "GBP", 8492.04, "465728", "2", "kate1", "12")
    let transaction = new Transaction(customer1, customer, "GBP", 8492.04, "karen-kate", "Karen Salmon", customer1.getBankBalance(), customer.getBankBalance(), "12:00", "CASH_DEPOSIT");
    expect( transaction.getPayee()).toEqual(customer1);
  })

  it('should be able to set the payee name', () => {
    let customer =
      new Customer("Kate Salmon","785903756", "GBP", 8492.04, "465728", "2", "kate1", "12")
    let customer1 =
      new Customer("Karen Salmon","785903756", "GBP", 8492.04, "465728", "2", "kate1", "12")
    let transaction = new Transaction(customer1, customer, "GBP", 8492.04, "karen-kate", "Karen Salmon", customer1.getBankBalance(), customer.getBankBalance(), "12:00", "CASH_DEPOSIT");
   transaction.setPayee(customer);
    expect( transaction.getPayee()).toEqual(customer);
  })
  it('should be able to set the currency of a transaction', () => {
  let customer =
    new Customer("Kate Salmon","785903756", "GBP", 8492.04, "465728", "2", "kate1", "12")
  let customer1 =
    new Customer("Karen Salmon","785903756", "GBP", 8492.04, "465728", "2", "kate1", "12")
  let transaction = new Transaction(customer1, customer, "GBP", 8492.04, "karen-kate", "Karen Salmon", customer1.getBankBalance(), customer.getBankBalance(), "12:00", "CASH_DEPOSIT");
  transaction.setCurrency("ADA");
  expect( transaction.getCurrency()).toEqual("ADA");
})
it('should be able to get the currency of a transaction', () => {
let customer =
  new Customer("Kate Salmon","785903756", "GBP", 8492.04, "465728", "2", "kate1", "12")
let customer1 =
  new Customer("Karen Salmon","785903756", "GBP", 8492.04, "465728", "2", "kate1", "12")
let transaction = new Transaction(customer1, customer, "GBP", 8492.04, "karen-kate", "Karen Salmon", customer1.getBankBalance(), customer.getBankBalance(), "12:00", "CASH_DEPOSIT");
expect( transaction.getCurrency()).toEqual("GBP");
})
it('should be able to set the amount', () => {
  let customer =
    new Customer("Kate Salmon","785903756", "GBP", 8492.04, "465728", "2", "kate1", "12")
  let customer1 =
    new Customer("Karen Salmon","785903756", "GBP", 8492.04, "465728", "2", "kate1", "12")
  let transaction = new Transaction(customer1, customer, "GBP", 8492.04, "karen-kate", "Karen Salmon", customer1.getBankBalance(), customer.getBankBalance(), "12:00", "CASH_DEPOSIT");
    transaction.setAmount(900);
    expect( transaction.getAmount()).toEqual(900);
})
  it('should be able to get the payer', () => {
    let customer =
      new Customer("Kate Salmon","785903756", "GBP", 8492.04, "465728", "2", "kate1", "12")
    let customer1 =
      new Customer("Karen Salmon","785903756", "GBP", 8492.04, "465728", "2", "kate1", "12")
    let transaction = new Transaction(customer1, customer, "GBP", 8492.04, "karen-kate", "Karen Salmon", customer1.getBankBalance(), customer.getBankBalance(), "12:00", "CASH_DEPOSIT");
    expect( transaction.getPayer()).toEqual(customer);
  })
  it('should be able to set payer', () => {
    let customer =
      new Customer("Kate Salmon","785903756", "GBP", 8492.04, "465728", "2", "kate1", "12")
    let customer1 =
      new Customer("Karen Salmon","785903756", "GBP", 8492.04, "465728", "2", "kate1", "12")
    let transaction = new Transaction(customer1, customer, "GBP", 8492.04, "karen-kate", "Karen Salmon", customer1.getBankBalance(), customer.getBankBalance(), "12:00", "CASH_DEPOSIT");
    transaction.setPayer(customer1);
    expect( transaction.getPayer()).toEqual(customer1);
  })
  it('should be able to get the payees balance', () => {
    let customer =
      new Customer("Kate Salmon","785903756", "GBP", 8492.04, "465728", "2", "kate1", "12")
    let customer1 =
      new Customer("Karen Salmon","785903756", "GBP", 8492.04, "465728", "2", "kate1", "12")
    let transaction = new Transaction(customer1, customer, "GBP", 8492.04, "karen-kate", "Karen Salmon", customer1.getBankBalance(), customer.getBankBalance(), "12:00", "CASH_DEPOSIT");
    expect( transaction.getPayeeBalance()).toEqual(8492.04);
  })
  it('should be able to set the payees balance', () => {
    let customer =
      new Customer("Kate Salmon","785903756", "GBP", 8492.04, "465728", "2", "kate1", "12")
    let customer1 =
      new Customer("Karen Salmon","785903756", "GBP", 8492.04, "465728", "2", "kate1", "12")
    let transaction = new Transaction(customer1, customer, "GBP", 8492.04, "karen-kate", "Karen Salmon", customer1.getBankBalance(), customer.getBankBalance(), "12:00", "CASH_DEPOSIT");
    transaction.setPayeeBalance(13);
    expect(transaction.getPayeeBalance()).toEqual(13);
  })
  it('should be able to get the payers balance', () => {
    let customer =
      new Customer("Kate Salmon","785903756", "GBP", 8492.04, "465728", "2", "kate1", "12")
    let customer1 =
      new Customer("Karen Salmon","785903756", "GBP", 8492.04, "465728", "2", "kate1", "12")
    let transaction = new Transaction(customer1, customer, "GBP", 8492.04, "karen-kate", "Karen Salmon", customer1.getBankBalance(), customer.getBankBalance(), "12:00", "CASH_DEPOSIT");
    expect( transaction.getPayerBalance()).toEqual(8492.04);
  })
  it('should be able to set the payers balance', () => {
    let customer =
      new Customer("Kate Salmon","785903756", "GBP", 8492.04, "465728", "2", "kate1", "12")
    let customer1 =
      new Customer("Karen Salmon","785903756", "GBP", 8492.04, "465728", "2", "kate1", "12")
    let transaction = new Transaction(customer1, customer, "GBP", 8492.04, "karen-kate", "Karen Salmon", customer1.getBankBalance(), customer.getBankBalance(), "12:00", "CASH_DEPOSIT");
    transaction.setPayerBalance(14);
    expect( transaction.getPayerBalance()).toEqual(14);
  })
  it('should be able to get the transaction timestamp', () => {
    let customer =
      new Customer("Kate Salmon","785903756", "GBP", 8492.04, "465728", "2", "kate1", "12")
    let customer1 =
      new Customer("Karen Salmon","785903756", "GBP", 8492.04, "465728", "2", "kate1", "12")
    let transaction = new Transaction(customer1, customer, "GBP", 8492.04, "karen-kate", "Karen Salmon", customer1.getBankBalance(), customer.getBankBalance(), "12:00", "CASH_DEPOSIT");
    expect( transaction.getTransactionTimestamp()).toEqual("12:00");
  })
  it('should be able to set the transaction timestamp', () => {
    let customer =
      new Customer("Kate Salmon","785903756", "GBP", 8492.04, "465728", "2", "kate1", "12")
    let customer1 =
      new Customer("Karen Salmon","785903756", "GBP", 8492.04, "465728", "2", "kate1", "12")
    let transaction = new Transaction(customer1, customer, "GBP", 8492.04, "karen-kate", "Karen Salmon", customer1.getBankBalance(), customer.getBankBalance(), "12:00", "CASH_DEPOSIT");
    transaction.setTransactionTimestamp("13:00");
    expect( transaction.getTransactionTimestamp()).toEqual("13:00");
  })
  it('should be able to get the transaction type', () => {
    let customer =
      new Customer("Kate Salmon","785903756", "GBP", 8492.04, "465728", "2", "kate1", "12")
    let customer1 =
      new Customer("Karen Salmon","785903756", "GBP", 8492.04, "465728", "2", "kate1", "12")
    let transaction = new Transaction(customer1, customer, "GBP", 8492.04, "karen-kate", "Karen Salmon", customer1.getBankBalance(), customer.getBankBalance(), "12:00", "CASH_DEPOSIT");
    expect( transaction.getTransactionType()).toEqual("CASH_DEPOSIT");
  })
  it('should be able to set the transaction timestamp', () => {
    let customer =
      new Customer("Kate Salmon","785903756", "GBP", 8492.04, "465728", "2", "kate1", "12")
    let customer1 =
      new Customer("Karen Salmon","785903756", "GBP", 8492.04, "465728", "2", "kate1", "12")
    let transaction = new Transaction(customer1, customer, "GBP", 8492.04, "karen-kate", "Karen Salmon", customer1.getBankBalance(), customer.getBankBalance(), "12:00", "CASH_DEPOSIT");
    transaction.setTransactionType("CASH_WITHDRAWAL");
    expect( transaction.getTransactionType()).toEqual("CASH_WITHDRAWAL");
  })

});
