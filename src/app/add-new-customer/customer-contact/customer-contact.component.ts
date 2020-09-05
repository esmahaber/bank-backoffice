import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-customer-contact',
  templateUrl: './customer-contact.component.html',
  styleUrls: ['./customer-contact.component.css']
})
export class CustomerContactComponent implements OnInit {

  model: Contact = new Contact();

  constructor() { }

  ngOnInit(): void {
  }

}
