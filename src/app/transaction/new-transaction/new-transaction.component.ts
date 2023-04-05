import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TransactionService} from "../transaction.service";
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import {Router} from "@angular/router";
import {Transaction} from "../transaction";

@Component({
  selector: 'app-profile-editor',
  templateUrl: './new-transaction.component.html',
  styleUrls: ['./new-transaction.component.css']
})
export class NewTransactionComponent implements  OnInit {
  protected transactionDetails: any | undefined;
  protected submitted: boolean | undefined;
  protected editable:boolean | undefined;

  constructor(private transactionService: TransactionService,
              private formBuilder: RxFormBuilder,
              private router: Router) {
  }
  ngOnInit(): void {
    this.transactionDetails = new FormGroup({
      payee: new FormControl('', [
        Validators.required,
        Validators.pattern(/[\S]/)
      ]),
      accountNumber: new FormControl('', [
        Validators.required,
        Validators.pattern(/[\S]/)
      ]),
      currency: new FormControl('', [
        Validators.required,
        Validators.pattern(/[\S]/)
      ]),
      amount: new FormControl('', [
        Validators.required,
        Validators.pattern(/[\S]/)
      ]),
      sortcode: new FormControl('', [
        Validators.required,
        Validators.pattern(/[\S]/)
      ]),
      transactionName: new FormControl('', [
        Validators.required,
        Validators.pattern(/[\S]/)
      ])
    });

    this.submitted = false;
    this.editable = true;
  }
  onSubmit() {
    this.submitted = true;
    // @ts-ignore
    if (this.transactionDetails.invalid) {
      return;
    }
    // @ts-ignore
    let transaction = Object.assign(new Transaction(), this.transactionDetails.value)
    this.transactionService.create(transaction).subscribe( (persistedTransaction: any) => {
      this.transactionDetails = this.formBuilder.formGroup(Transaction,persistedTransaction);
      this.editable = false;
      this.submitted = false;
      this.router.navigate(['/transactions'])
      console.log(JSON.stringify(persistedTransaction, null, 2));
    });
  }
  onReset(): void {
    this.submitted = false;
    this.editable = true;
    // @ts-ignore
    this.transactionDetails.reset();
  }
}
