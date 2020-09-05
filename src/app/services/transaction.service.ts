import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from '../models/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private httpClient: HttpClient) { }
  path = "http://localhost:3000/";

  getTransaction(): Observable<Transaction[]> {
    return this.httpClient.get<Transaction[]>(this.path + "transaction/history");
  }

  getTransactionDay(): Observable<Transaction[]> {
    return this.httpClient.get<Transaction[]>(this.path + "transaction/history/day");
  }

  getTransactionSendHistory(id): Observable<Transaction[]> {
    return this.httpClient.get<Transaction[]>(this.path + `transaction/history/sender/${id}`);
  }

  getTransactionReceiveHistory(id): Observable<Transaction[]> {
    return this.httpClient.get<Transaction[]>(this.path + `transaction/history/receiver/${id}`);
  }

  addTransaction(transaction: Transaction): Observable<Transaction[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': 'Token'
      })
    }

    return this.httpClient.post<Transaction[]>(this.path + 'transaction', transaction, httpOptions)
  }

  updateDebt(debt, id): Observable<Transaction[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': 'Token'
      })
    }
    return this.httpClient.put<Transaction[]>(this.path + `debt/${id}`, debt, httpOptions);
  }

  updateCredit(credit, id): Observable<Transaction[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': 'Token'
      })
    }
    return this.httpClient.put<Transaction[]>(this.path + `credit/${id}`, credit, httpOptions);
  }

}
