import { Component, OnInit } from '@angular/core';
import { Transaction } from '../models/transaction';
import { TransactionService } from '../services/transaction.service';
import { NgForm } from '@angular/forms';
import { AccountService } from '../services/account.service';
declare let alertify: any;

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  head = 'Transaction'

  model: Transaction = new Transaction();
  transaction: Transaction[];

  constructor(private transactionService: TransactionService,
    private accountService: AccountService
  ) { }

  ngOnInit(): void {

  }

  addTransaction(form: NgForm) {
    console.log(form)
    this.transactionService.addTransaction(this.model).subscribe(data => {
      console.log(this.model.transactionType);
      if (this.model.transactionType == 'Debt') {
        this.updateSenderAccount(this.model.amount, this.model.senderAccountId);
        this.updateReceiverAccount(this.model.amount, this.model.receiverAccountId);
      }
      if (data) {
        alertify.success("Transaction successful!");
      }

    });
  }

  updateSenderAccount(amount, id) {
    this.transactionService.updateDebt(amount, id);
  }

  updateReceiverAccount(amount, id) {
    this.transactionService.updateCredit(amount, id);
  }
}
