import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NewCustomerComponent} from "./customer/new-customer/new-customer.component";
import {AppComponent} from "./app.component";
import {CustomerComponent} from "./customer/customer.component";
import {NewTransactionComponent} from "./transaction/new-transaction/new-transaction.component";
import {TransactionComponent} from "./transaction/transaction.component";
import {EditCustomerComponent} from "./customer/edit-customer/edit-customer.component";
import {EditTransactionComponent} from "./transaction/edit-transaction/edit-transaction.component";
import {LoginComponent} from "./login/login.component";
import {CustomerSupportComponent} from "./customer-support/customer-support.component";
import {CustomerContactComponent} from "./customer-contact/customer-contact.component";
import {CustomerFAQComponent} from "./customer-faq/customer-faq.component";
import {EmployeeFAQComponent} from "./employee-faq/employee-faq.component";
import {EmployeeSupportComponent} from "./employee-support/employee-support.component";
import {EmployeeContactComponent} from "./employee-contact/employee-contact.component";
import {BudgetComponent} from "./budget/budget.component";


const routes: Routes = [
  {path: '', pathMatch: 'full', component: AppComponent},
  {path: 'login', component: LoginComponent},
  {path: 'new-customer', component: NewCustomerComponent},
  {path: 'edit-customer', component: EditCustomerComponent},
  {path: 'customers', component: CustomerComponent},
  {path: 'new-transaction', component: NewTransactionComponent},
  {path: 'transactions', component: TransactionComponent},
  {path: 'edit-transaction', component: EditTransactionComponent},
  {path: 'customerSupport', component: CustomerSupportComponent},
  {path: 'customerContact', component: CustomerContactComponent},
  {path: 'customerFAQ', component: CustomerFAQComponent},
  {path: 'customerSupport', component: CustomerSupportComponent},
  {path: 'employeeFAQ', component: EmployeeFAQComponent},
  {path: 'employeeSupport', component: EmployeeSupportComponent},
  {path: 'employeeContact', component: EmployeeContactComponent},
  {path: 'budget', component: BudgetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
