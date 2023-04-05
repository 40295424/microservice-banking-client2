import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewCustomerComponent} from "./customer/new-customer/new-customer.component";
import {AppComponent} from "./app.component";
import {CustomerComponent} from "./customer/customer.component";
import {NewTransactionComponent} from "./transaction/new-transaction/new-transaction.component";
import {TransactionComponent} from "./transaction/transaction.component";

const routes: Routes = [
 { path: '', pathMatch: 'full',component: AppComponent },
  { path: 'new-customer', component: NewCustomerComponent },
 { path: 'customers', component: CustomerComponent },
 { path: 'new-transaction', component: NewTransactionComponent },
 { path: 'transactions', component: TransactionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
