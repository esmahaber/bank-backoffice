import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { AddressService } from '../../../services/address.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
  providers: [AddressService]
})
export class AddressComponent implements OnInit {

  model: Customer = new Customer();
  address: Customer[];

  constructor(private addressService: AddressService) { }

  ngOnInit(): void {
  }

  
}
