import { Component, OnInit } from '@angular/core';
import {client} from 'socket.io';

import {MarketServiceService} from '../market-service/market-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [MarketServiceService]
})
export class DashboardComponent implements OnInit {

  constructor(private marketService: MarketServiceService) {this.marketService.sendMessage() }

  price:number = this.marketService.price;

  ngOnInit() {

  }

}
