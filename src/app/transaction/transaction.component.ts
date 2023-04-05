import {Component, OnDestroy, OnInit} from '@angular/core';
import {TransactionService} from "./transaction.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements  OnInit, OnDestroy{
  protected  transactions: any = [];
  protected numberOfTransaction : number = 0;
  constructor(private transactionService: TransactionService,
              private router: Router) {
  }

  ngOnInit() {
    this.transactionService.getAll().subscribe( (data: any) => {
      this.transactions = data;
      this.numberOfTransaction = data.length;
      console.log(JSON.stringify(data, null, 2));
    })
  }
  ngOnDestroy(): void {
  }

  addNewTransaction() :void {
    this.router.navigate(['new-transaction']);
  }

  onDelete(): void {

  }

  onEdit(): void {

  }
}
