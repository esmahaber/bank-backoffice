import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/models/customer';
import { NgForm } from '@angular/forms';
declare let alertify: any;

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css'],
  providers: [CustomerService, BsModalService]
})
export class EditCustomerComponent implements OnInit {

  modalRef: BsModalRef;

  updateCustomer: Customer = new Customer();
  @Input() customer: Customer[];
  @Input() customerId: number;

  constructor(private modalService: BsModalService,
    private customerService: CustomerService
  ) { }

  ngOnInit(): void {

  }

  updateCustomerFonk(form: NgForm, id) {
    console.log(form)
    this.customerService.updateCustomer(this.updateCustomer, this.customerId).subscribe(data => {
      console.log(data);
      if (data) {
        this.modalRef.hide();
        alertify.success("Updated customer");

      } else
        alertify.error("Please check the form");

    });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    console.log(this.customer);
  }

}
