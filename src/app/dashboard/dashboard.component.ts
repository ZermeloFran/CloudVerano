import { Component, OnInit, OnDestroy, OnChanges, Input,SimpleChanges} from '@angular/core';
import {client} from 'socket.io';

import {MarketServiceService} from '../market-service/market-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy, OnChanges{

  @Input() price: number;

  trColor : String = "active";

  constructor(private marketService: MarketServiceService) {
    //this.marketService.sendMessage()
    //this.price = this.marketService.price;
   }

   ngOnChanges(changes: SimpleChanges){
    console.log(changes)
   }

  ngOnInit() {
    console.log("ngOnInit Begin");
    this.marketService.initConnection();
    console.log("ngOnInit initConnection End");
    this.marketService.mySub.subscribe((value:number)=>{
      if(value>this.price)
        this.trColor = "success";
      else
        this.trColor = "danger";
      this.price=value;
    });
    console.log("ngOnInit subscribe End");
    this.marketService.sendMessage();
    console.log("ngOnInit sendMessage End");
  }

  ngOnDestroy(){
    console.log("ngOnDestroy Begin");
    //this.marketService.mySub.unsubscribe();
    //console.log("ngOnDestroy unsubscribe End");
    this.marketService.getSocket().disconnect();
    console.log("ngOnDestroy disconnect End");
  }

}
