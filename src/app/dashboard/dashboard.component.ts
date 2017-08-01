import { Component, OnInit, OnDestroy, Input} from '@angular/core';
import {client} from 'socket.io';

import {MarketServiceService} from '../market-service/market-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy{

   prices: number [];

  trColor : String = "active";

  constructor(private marketService: MarketServiceService) {}

  ngOnInit() {
    console.log("ngOnInit Begin");
    this.marketService.initConnection();
    console.log("ngOnInit initConnection End");
    this.marketService.mySub.subscribe((value: any[])=>{
        switch(value[0]){
          case 'BTC':
            this.changeColor(0, 'BTC', value[1]);
            break;
          case 'ETH':
          this.changeColor(1, 'ETH', value[1]);
            break;
          case 'XRP':
          this.changeColor(2, 'XRP', value[1]);
            break;
          case 'LTC':
          this.changeColor(3, 'LTC', value[1]);
            break;
          case 'XEM':
          this.changeColor(4, 'XEM', value[1]);
            break;
          case 'DASH':
          this.changeColor(5, 'DASH', value[1]);
            break;
          case 'ETC':
          this.changeColor(6, 'ETC', value[1]);
            break;
          case 'MIOTA':
          this.changeColor(7, 'MIOTA', value[1]);
            break;
          case 'XMR':
          this.changeColor(8, 'XMR', value[1]);
            break;
          case 'STRAT':
          this.changeColor(9, 'STRAT', value[1]);
            break;
        }
    });
    console.log("ngOnInit subscribe End");
    this.marketService.sendMessage();
    console.log("ngOnInit sendMessage End");
  }

  changeColor(index:number, symbol:string, price: number){
    if(price>this.prices[index]){
      this.trColor = "success";
    }else{
      this.trColor = "danger";
    }
    this.prices[index] = price;
  }

  ngOnDestroy(){
    console.log("ngOnDestroy Begin");
    this.marketService.getSocket().disconnect();
    console.log("ngOnDestroy disconnect End");
  }

}
