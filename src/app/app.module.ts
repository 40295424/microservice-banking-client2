import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { TransactionComponent } from './transaction/transaction.component';
import { NewCustomerComponent } from './customer/new-customer/new-customer.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewTransactionComponent } from './transaction/new-transaction/new-transaction.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {RxReactiveFormsModule} from "@rxweb/reactive-form-validators";
import {DataTablesModule} from 'angular-datatables';
import { EditCustomerComponent } from './customer/edit-customer/edit-customer.component';
import { EditTransactionComponent } from './transaction/edit-transaction/edit-transaction.component';
import { LoginComponent } from './login/login.component';
import { CustomerSupportComponent } from './customer-support/customer-support.component';
import { CustomerContactComponent } from './customer-contact/customer-contact.component';
import { CustomerFAQComponent } from './customer-faq/customer-faq.component';
import { EmployeeFAQComponent } from './employee-faq/employee-faq.component';
import { EmployeeSupportComponent } from './employee-support/employee-support.component';
import { EmployeeContactComponent } from './employee-contact/employee-contact.component';
import { BudgetComponent } from './budget/budget.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    TransactionComponent,
    NewCustomerComponent,
    NewTransactionComponent,
    EditCustomerComponent,
    EditTransactionComponent,
    LoginComponent,
    CustomerSupportComponent,
    CustomerContactComponent,
    CustomerFAQComponent,
    EmployeeFAQComponent,
    EmployeeSupportComponent,
    EmployeeContactComponent,
    BudgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    RxReactiveFormsModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
