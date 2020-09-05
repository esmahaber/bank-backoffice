import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Address } from '../models/address';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http: HttpClient) { }
  path = "http://localhost:3000/";

  getAddress(): Observable<Address[]> {
    return this.http.get<Address[]>(this.path + "customers/contact/address");
  }

  addAddress(address: Address): Observable<Address[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization' : 'Token'
      })
    }

    console.log(address);
    return this.http.post<Address[]>(this.path + 'customers/contact/address', address, httpOptions)
  }
}
