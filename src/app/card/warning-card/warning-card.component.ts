import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/services/transaction.service';
import { Transaction } from 'src/app/models/transaction';

@Component({
  selector: 'app-warning-card',
  templateUrl: './warning-card.component.html',
  styleUrls: ['./warning-card.component.css'],
  providers: [TransactionService]
})
export class WarningCardComponent implements OnInit {

  constructor(public transactionService : TransactionService) { }

  tableHeaders= ['Id', 'Date', 'Amount', 'Type' ];
  title = "History Transaction"

  model: Transaction = new Transaction();
  transactions: Transaction[];
  date = new Date;
  limit = 5;

  ngOnInit(): void {
    this.transactionService.getTransactionDay().subscribe(data => {
      console.log(data);
      this.transactions = data;
    }
    )
  }

}
