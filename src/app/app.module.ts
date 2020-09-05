import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { CardComponent } from './card/card.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AddNewCustomerComponent } from './add-new-customer/add-new-customer.component';
import { TransactionComponent } from './transaction/transaction.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { CustomerAccountComponent } from './customer-account/customer-account.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CustomerContactComponent } from './add-new-customer/customer-contact/customer-contact.component';
import { AddressComponent } from './add-new-customer/customer-contact/address/address.component';
import { Sidebar2Component } from './sidebar2/sidebar2.component';
import { CustomerComponent } from './customer/customer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { WarningCardComponent } from './card/warning-card/warning-card.component';
import { FilterPipe } from './customer-account/filter.pipe';
import { SmallModalComponent } from './modals/small-modal/small-modal.component';
import { AccountAddComponent } from './customer-account/account-add/account-add.component';
import { TaskCardComponent } from './card/task-card/task-card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { EditCustomerComponent } from './customer-account/PopUp/edit-customer/edit-customer.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    CardComponent,
    FooterComponent,
    AddNewCustomerComponent,
    TransactionComponent,
    TransactionHistoryComponent,
    CustomerAccountComponent,
    HomeComponent,
    PageNotFoundComponent,
    CustomerContactComponent,
    AddressComponent,
    Sidebar2Component,
    CustomerComponent,
    WarningCardComponent,
    FilterPipe,
    SmallModalComponent,
    AccountAddComponent,
    TaskCardComponent,
    EditCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    BrowserAnimationsModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
