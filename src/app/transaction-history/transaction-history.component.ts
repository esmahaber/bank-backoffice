import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer';
import { CustomerService } from '../services/customer.service';
import { Transaction } from '../models/transaction';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css'],
  providers: [CustomerService]
})
export class TransactionHistoryComponent implements OnInit {

  constructor(private transactionService: TransactionService) { }
  transactions: Transaction[];

  tableHeaders= ['Id', 'Date', 'Sender', 'Receiver', 'Amount', 'Type', 'Explanation' ];
  title = "History Transaction"

  ngOnInit(): void {
    this.transactionService.getTransaction().subscribe(data => {
      console.log(data);
      this.transactions = data
    }
    )
  }



}
