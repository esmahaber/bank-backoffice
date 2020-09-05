import { Component, OnInit } from '@angular/core';
import {StatisticsService} from '../services/statistics.service';
import {Statistic} from '../models/statistic';
import { from } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private statisticsService: StatisticsService) { }
  model: Statistic = new Statistic();

  ngOnInit(): void {
    this.statisticsService.getTotalCustomers().subscribe(data => {
      this.model.totalCustomers = data[0].totalCustomers;
    })

    this.statisticsService.getTotalBalance().subscribe(data => {
      this.model.totalBalance = data[0].totalBalance;
    })

    this.statisticsService.getTotalAccount().subscribe(data => {
      this.model.totalAccount = data[0].totalAccount;
    })

    this.statisticsService.getActiveAccount().subscribe(data => {
      console.log(data[0].activeAccount);
      this.model.activeAccount = data[0].activeAccount;
    })
  }

}
