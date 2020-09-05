import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {
  
  constructor(private httpClient: HttpClient) { }
  
  path = "http://localhost:3000/statistics/";

  getTotalCustomers(): Observable<any> {
    return this.httpClient.get<any>(this.path + "totalCustomers");
  }

  getTotalBalance(): Observable<any> {
    return this.httpClient.get<any>(this.path + "totalBalance");
  }

  getTotalAccount(): Observable<any> {
    return this.httpClient.get<any>(this.path + "totalAccount");
  }

  getActiveAccount(): Observable<any> {
    return this.httpClient.get<any>(this.path + "activeAccount");
  }
}
