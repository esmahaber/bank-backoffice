import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../services/customer.service';
import { Customer } from '../models/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
  providers: [CustomerService]
})
export class CustomerComponent implements OnInit {

  constructor(private customerService: CustomerService) { }
  customers: Customer[];
  ngOnInit(): void {
    this.customerService.getCustomers().subscribe(data => {
      this.customers = data;
    })
  }

}
