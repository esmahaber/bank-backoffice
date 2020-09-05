import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccountService } from 'src/app/services/account.service';
import { Account } from 'src/app/models/account';
declare let alertify: any;


@Component({
  selector: 'app-account-add',
  templateUrl: './account-add.component.html',
  styleUrls: ['./account-add.component.css']
})
export class AccountAddComponent implements OnInit {

  constructor(private accountService : AccountService) { }

  ngOnInit(): void {
  }

  model: Account = new Account();
  @Input() customerIdAdd:number;


  
}
