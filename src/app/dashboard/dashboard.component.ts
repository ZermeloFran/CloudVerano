import { Component, OnInit, OnDestroy, Input} from '@angular/core';
import {client} from 'socket.io';

import {MarketServiceService} from '../market-service/market-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy{

  currentPrices: number[] =  [];
  currencyNames: string [] = ['BTC', 'ETH', 'XRP', 'LTC', 'XEM',
    'DASH', 'ETC', 'DOGE', 'XMR', 'STRAT'];
  rowColor : string [] = ["active","active","active","active","active",
  "active","active","active","active","active"];
  avgPrice : string [] = [];
  high24Hrs : string [] = [];
  low24Hrs : string []= [];
  lastMarket : string []= [];

  constructor(private marketService: MarketServiceService) {}

  ngOnInit() {
    console.log("ngOnInit Begin");
    this.marketService.initConnection();
    console.log("ngOnInit initConnection End");
    this.marketService.mySub.subscribe((value: any[])=>{
        switch(value[0]){
          case 'BTC':
            this.changeColor(0, 'BTC', value[1], value[2], value[3], value [4], value[5]);
            break;
          case 'ETH':
          this.changeColor(1, 'ETH', value[1], value[2], value[3], value [4], value[5]);
            break;
          case 'XRP':
          this.changeColor(2, 'XRP', value[1], value[2], value[3], value [4], value[5]);
            break;
          case 'LTC':
          this.changeColor(3, 'LTC', value[1], value[2], value[3], value [4], value[5]);
            break;
          case 'XEM':
          this.changeColor(4, 'XEM', value[1], value[2], value[3], value [4], value[5]);
            break;
          case 'DASH':
          this.changeColor(5, 'DASH', value[1], value[2], value[3], value [4], value[5]);
            break;
          case 'ETC':
          this.changeColor(6, 'ETC', value[1], value[2], value[3], value [4], value[5]);
            break;
          case 'DOGE':
          this.changeColor(7, 'DOGE', value[1], value[2], value[3], value [4], value[5]);
            break;
          case 'XMR':
          this.changeColor(8, 'XMR', value[1], value[2], value[3], value [4], value[5]);
            break;
          case 'STRAT':
          this.changeColor(9, 'STRAT', value[1], value[2], value[3], value [4], value[5]);
            break;
        }
    });
    console.log("ngOnInit subscribe End");
    this.marketService.sendMessage();
    console.log("ngOnInit sendMessage End");
  }

  changeColor(index:number, symbol:string, newPrice: number, avg:string,
   high24:string, low24:string, lastmarket:string){
    if(newPrice>this.currentPrices[index]){
      this.rowColor[index] = "success";
    }else{
      this.rowColor[index] = "danger";
    }
    if(newPrice!=null)
      this.currentPrices[index] = newPrice;
    if(avg!=null)
      this.avgPrice[index] = avg;
    if(high24!=null)
      this.high24Hrs[index] = high24;
    if(low24!=null)
      this.low24Hrs[index] = low24;
    if(lastmarket!=null)
      this.lastMarket[index] = lastmarket;
  }

  ngOnDestroy(){
    console.log("ngOnDestroy Begin");
    this.marketService.getSocket().disconnect();
    console.log("ngOnDestroy disconnect End");
  }

}
