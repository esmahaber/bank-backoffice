import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer';
import { CustomerService } from '../services/customer.service';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
declare let alertify: any;

@Component({
  selector: 'app-add-new-customer',
  templateUrl: './add-new-customer.component.html',
  styleUrls: ['./add-new-customer.component.css'],
  providers: [CustomerService]

})
export class AddNewCustomerComponent implements OnInit {

  model: Customer = new Customer();
  customers: Customer[];
  head = 'Add New Customer';

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
  }

  addCustomer(form: NgForm) {
    console.log(form)
    this.customerService.addCustomer(this.model).subscribe(data => {
      console.log(data);
     
      if (data) {
        alertify.success("Added new customer");
      }else
      alertify.error("Please check the form");


      
    });
  }
}
