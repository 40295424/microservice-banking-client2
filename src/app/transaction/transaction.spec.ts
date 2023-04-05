import { Transaction } from './transaction';

describe('Transaction', () => {
  it('should create an instance', () => {
    expect(new Transaction("Kate Salmon","785903756", "GBP", 8492.04, "465728", "Karen Salmon")).toBeTruthy();
  });

  it('should be able to create Transaction with Transaction name', () => {
    let transaction = new Transaction("Kate Salmon","785903756", "GBP", 8492.04, "465728", "Karen Salmon");
    expect(transaction.getTransactionName()).toEqual("Karen Salmon");
  })
  it('should be able to create Transaction with account number', () => {
    let transaction = new Transaction("Kate Salmon", "785903756", "GBP", 8492.04, "465728", "Karen Salmon");
    expect( transaction.getAccountNumber()).toEqual("785903756");
  })
  it('should be able to get the Transactions currency', () => {
    let transaction = new Transaction("Kate Salmon", "785903756", "GBP", 8492.04, "465728", "Karen Salmon");
    expect( transaction.getCurrency()).toEqual("GBP");
  })
  it('should be able to get the Transactions sortcode', () => {
    let transaction = new Transaction("Kate Salmon", "785903756", "GBP", 8492.04, "465728", "Karen Salmon");
    expect( transaction.getAccountNumber()).toEqual("785903756");
  })
  it('should be able to get the Transactions bank balance', () => {
    let transaction = new Transaction("Kate Salmon", "785903756", "GBP", 8492.04, "465728", "Karen Salmon");
    expect( transaction.getamount()).toEqual(8492.04);
  })
  it('should be able to get the Transactions bank balance', () => {
    let transaction = new Transaction("Kate Salmon", "785903756", "GBP", 8492.04, "465728", "Karen Salmon");
    expect( transaction.getPayee()).toEqual("Kate Salmon");
  })
  it('should be able to get the Transactions sort code', () => {
    let transaction = new Transaction("Kate Salmon", "785903756", "GBP", 8492.04, "465728", "Karen Salmon");
    expect( transaction.getSortCode()).toEqual("465728");
  })
  it('should be able to set the Transactions name', () => {
    let transaction = new Transaction(" ", "785903756", "GBP", 8492.04, "465728", "Karen Salmon")
    transaction.setTransactionName("Karen Salmon");
    expect( transaction.getTransactionName()).toEqual("Karen Salmon");
  })
  it('should be able to set the Transactions account number', () => {
    let transaction = new Transaction("Karen Salmon ", "", "GBP", 8492.04, "465728", "Karen Salmon")
    transaction.setAccountNumber("785903757");
    expect( transaction.getAccountNumber()).toEqual("785903757");
  })
  it('should be able to set the Transactions currency', () => {

    let transaction = new Transaction("Karen Salmon ", "785903757", "", 8492.04, "465728", "Karen Salmon")
    transaction.setCurrency("EUR");
    expect( transaction.getCurrency()).toEqual("EUR");
  })
  it('should be able to set the Transactions amount', () => {
    let transaction = new Transaction("Karen Salmon ", "785903757", "EUR", 0, "465728", "Karen Salmon")
    transaction.setamount(900);
    expect( transaction.getamount()).toEqual(900);
  })
  it('should be able to set the Transactions sortcode', () => {
    let transaction = new Transaction("Karen Salmon ", "785903757", "EUR", 900, "", "Karen Salmon")
    transaction.setSortCode("908786");
    expect( transaction.getSortCode()).toEqual("908786");
  })
  it('should be able to set the Transactions payee', () => {
    let transaction = new Transaction("Kate Salmon", "785903756", "GBP", 8492.04, "465728", "");
    transaction.setPayee("Karen Salmon");
    expect( transaction.getPayee()).toEqual("Karen Salmon");
  })
});
