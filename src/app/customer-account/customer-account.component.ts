import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { Customer } from '../models/customer';
import { CustomerService } from '../services/customer.service';
import { AccountService } from '../services/account.service';
import { TransactionService } from '../services/transaction.service';
import { Transaction } from '../models/transaction';
import { NgForm } from '@angular/forms';
import { Account } from '../models/account';
declare let alertify: any;

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-customer-account',
  templateUrl: './customer-account.component.html',
  styleUrls: ['./customer-account.component.css'],
  providers: [AccountService]
})
export class CustomerAccountComponent implements OnInit {
  model: Customer = new Customer();
  customers: Customer[];
  customer: Customer[];
  transactionsSender: Transaction[];
  transactionsReceiver: Transaction[];
  account: Account[];
  filterText = "";
  delete = false;
  addAccountModal = false;
  customerId: number;
  senderTableHeaders = ['Date', 'Receiver', 'Amount', 'Type', 'Explanation'];
  receiverTableHeaders = ['Date', 'Sender', 'Amount', 'Type', 'Explanation'];

  modalRef: BsModalRef;
  message: string;


  constructor(private customerService: CustomerService,
    private accountService: AccountService,
    private transactionService: TransactionService,
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe(data => {
      this.customers = data
    }
    )
  }

  selectCustomer(id): void {
    this.customerId = id;
    this.customerService.getCustomer(id).subscribe(data => {
      this.customer = data;
    })


    this.accountService.getAccount(id).subscribe(data => {
      this.account = data;
    })

    this.transactionService.getTransactionSendHistory(id)
      .subscribe(data => {
        this.transactionsSender = data;
        console.log(data);
      }
      );

    this.transactionService.getTransactionReceiveHistory(id)
      .subscribe(data => {
        this.transactionsReceiver = data;
        console.log(data);
      });
  }


  deleteCustomer(): void {
    console.log(this.customerId)
    this.customerService.deleteCustomer(this.customerId)
      .subscribe(data => {
        console.log(data)
        alertify.success("Deleted customer");
        this.modalRef.hide();
        window.location.reload();
      }
      ),

      this.delete = true;
  }

  addAccount(): void {
    console.log(this.customerId)
    this.accountService.addAccount(this.customerId)
      .subscribe(data => {
        console.log(data);
        this.modalRef.hide();
      })
  }

  deleteAccount(id): void {
    console.log(id)
    this.accountService.deleteAccount(id)
      .subscribe(data => {
        console.log(data)
        alertify.success("Deleted account");
      }
      ),
      this.delete = true;
  }


  openModal(templatedelete: TemplateRef<any>, templateadd: TemplateRef<any>) {
    console.log(templatedelete);
    if (templatedelete)
      this.modalRef = this.modalService.show(templatedelete, { class: 'modal-sm' });
    if (templateadd)
      this.modalRef = this.modalService.show(templateadd, { class: 'modal-sm' });
  }


  confirm(): void {
    console.log(this.customerId);

  }

  decline(): void {
    this.modalRef.hide();
  }
}
