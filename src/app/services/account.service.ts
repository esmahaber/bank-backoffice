import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from '../models/account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient: HttpClient) { }
  path = "http://localhost:3300/";

  getAccount(id): Observable<Account[]> {
    return this.httpClient.get<Account[]>(this.path + `account/${id}`);
  }

  deleteAccount(id): Observable<Account[]> {
    return this.httpClient.delete<Account[]>(this.path + `account/${id}`);
  }

  updateAccount(id, data): Observable<Account[]> {
    return this.httpClient.put<Account[]>(this.path + `account/${id}`, data);
  }

  addAccount(id): Observable<Account[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': 'Token'
      })
    }
    return this.httpClient.post<Account[]>(this.path + 'account/', id, httpOptions)
  }



}
