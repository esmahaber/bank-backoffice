import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) { }
  path = "http://localhost:3000/";

  getCustomers(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.path + "customers");
  }

  getCustomer(id): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.path +`customers/${id}`);
  }

  addCustomer(customer: Customer): Observable<Customer[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization' : 'Token'
      })
    }
    return this.httpClient.post<Customer[]>(this.path + 'customers', customer, httpOptions)
  }

  deleteCustomer(id): Observable<Customer[]> {
    return this.httpClient.delete<Customer[]>(this.path + `customers/${id}`);
  }

  updateCustomer(customer : Customer, id): Observable<Customer[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization' : 'Token'
      })
    }
    return this.httpClient.put<Customer[]>(this.path + `customers/${id}`, customer, httpOptions);
  } 
}
