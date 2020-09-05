import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddNewCustomerComponent } from './add-new-customer/add-new-customer.component';
import { AppComponent } from './app.component';
import { CustomerAccountComponent } from './customer-account/customer-account.component';
import { TransactionComponent } from './transaction/transaction.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { CardComponent } from './card/card.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'new-customer', component: AddNewCustomerComponent },
  { path: 'account', component: CustomerAccountComponent },
  {
    path: 'transaction',
    component: TransactionComponent, // this is the component with the <router-outlet> in the template
    children: [
      {
        path: 'history', // child route path
        component: TransactionHistoryComponent, // child route component that the router renders
      }
    ],
  },
  { path: 'history', component: TransactionHistoryComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
