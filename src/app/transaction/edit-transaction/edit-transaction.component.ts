import {Component, OnInit} from '@angular/core';
import {RxFormBuilder} from "@rxweb/reactive-form-validators";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Transaction} from "../transaction";
import {TransactionService} from "../transaction.service";

@Component({
  selector: 'app-edit-transaction',
  templateUrl: './edit-transaction.component.html',
  styleUrls: ['./edit-transaction.component.css']
})
export class EditTransactionComponent implements  OnInit {

  protected transactionDetails: any | undefined;
  protected submitted: boolean | undefined;
  protected editable: boolean | undefined;

  constructor(private transactionService: TransactionService,
              private formBuilder: RxFormBuilder,
              private router: Router) {
  }

  ngOnInit(): void {
    this.transactionDetails = new FormGroup({
      transactionId: new FormControl('', [
        Validators.required,
        Validators.pattern(/[\S]/)
      ]),
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
    console.log(history.state);
    // @ts-ignore
    let transaction = Object.assign(new Transaction(), history.state)
    this.transactionDetails.setValue(transaction);
  }

  onSubmit() :void {
      this.submitted = true;
      // @ts-ignore
      if (this.transactionDetails.invalid) {
        return;
      }
      // @ts-ignore
      let transaction = Object.assign(new Transaction(), this.transactionDetails.value)
      this.transactionService.create(transaction).subscribe((persistedTransaction: any) => {
        // this.transactionDetails = this.formBuilder.formGroup(transaction, persistedTransaction);
        this.editable = false;
        this.submitted = false;
        this.router.navigate(['/transactions'])
        console.log(JSON.stringify(persistedTransaction, null, 2));
      });
    }
  onCancel() {
    this.router.navigate(['/transactions'])
  }

}
