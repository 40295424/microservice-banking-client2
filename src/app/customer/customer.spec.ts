import { Customer } from './customer';

describe('Customer', () => {
  it('should create an instance', () => {
    expect(new Customer("Kate Salmon","785903756", "GBP", 8492.04, "465728", "2")).toBeTruthy();
  });

  it('should be able to create Customer with customer name', () => {
    let customer = new Customer("Kate Salmon","785903756", "GBP", 8492.04, "465728", "2");
    expect( customer.getCustomerName()).toEqual("Kate Salmon");
  })
  it('should be able to create Customer with account number', () => {
    let customer = new Customer("Kate Salmon", "785903756", "GBP", 8492.04, "465728", "2");
    expect( customer.getAccountNumber()).toEqual("785903756");
  })
  it('should be able to get the customers currency', () => {
    let customer = new Customer("Kate Salmon", "785903756", "GBP", 8492.04, "465728", "2");
    expect( customer.getCurrency()).toEqual("GBP");
  })
  it('should be able to get the customers sortcode', () => {
    let customer = new Customer("Kate Salmon", "785903756", "GBP", 8492.04, "465728", "2");
    expect( customer.getAccountNumber()).toEqual("785903756");
  })
  it('should be able to get the customers bank balance', () => {
    let customer = new Customer("Kate Salmon", "785903756", "GBP", 8492.04, "465728", "2");
    expect( customer.getBankBalance()).toEqual(8492.04);
  })
  it('should be able to get the customers sort code', () => {
    let customer = new Customer("Kate Salmon", "785903756", "GBP", 8492.04, "465728", "2");
    expect( customer.getSortCode()).toEqual("465728");
  })
  it('should be able to set the customers name', () => {
    let customer = new Customer(" ", "785903756", "GBP", 8492.04, "465728", "2")
     customer.setCustiomerName("Karen Salmon");
    expect( customer.getCustomerName()).toEqual("Karen Salmon");
  })
  it('should be able to set the customers name', () => {
    let customer = new Customer("Karen Salmon ", "", "GBP", 8492.04, "465728", "2")
    customer.setAccountNumber("785903757");
    expect( customer.getAccountNumber()).toEqual("785903757");
  })
  it('should be able to set the customers name', () => {
    let customer = new Customer("Karen Salmon ", "785903757", "", 8492.04, "465728", "2")
    customer.setCurrency("EUR");
    expect( customer.getCurrency()).toEqual("EUR");
  })
  it('should be able to set the customers name', () => {
    let customer = new Customer("Karen Salmon ", "785903757", "EUR", 0, "465728", "2")
    customer.setBankBalance(900);
    expect( customer.getBankBalance()).toEqual(900);
  })
  it('should be able to set the customers name', () => {
    let customer = new Customer("Karen Salmon ", "785903757", "EUR", 900, "", "2")
    customer.setSortCode("908786");
    expect( customer.getSortCode()).toEqual("908786");
  })
});
