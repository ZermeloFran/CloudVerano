import { Injectable } from '@angular/core';
import { Socket } from 'ng-socket-io';

@Injectable()
export class MarketServiceService {

  subscription = ['5~CCCAGG~BTC~USD','5~CCCAGG~ETH~USD'];

  constructor(private socket: Socket) { this.socket.on("m", this.onSocketMessage)}

  sendMessage(){
    console.log("Inside sendMessage");
    this.socket.emit('SubAdd', {subs: this.subscription});
  }

  getMessage(){
    return this.socket.fromEvent("")
  }

  onSocketMessage(message: String){
    var messageType:String = message.substring(0, message.indexOf("~"));
    var res = {};
    if (messageType === '5') {
      //res = this.CCCCURRENTunpack(message);
      console.log(message);
      //updateQuote(res);
    }						
  }

//   updateQuote(result) {

// 	var keys = Object.keys(result);
// 	var pair = result.FROMSYMBOL + result.TOSYMBOL;
// 	if (!quote.hasOwnProperty(pair)) {
// 		quote[pair] = {}
// 		createDom(pair);
// 	}
// 	for (var i = 0; i <keys.length; ++i) {
// 		quote[pair][keys[i]] = result[keys[i]];
// 	}
// 	quote[pair]["CHANGE24H"] = quote[pair]["PRICE"] - quote[pair]["OPEN24HOUR"];
// 	quote[pair]["CHANGEPCT24H"] = quote[pair]["CHANGE24H"]/quote[pair]["OPEN24HOUR"] * 100;
// 	displayQuote(quote[pair]);
// }

  CCCCURRENTunpack (value:String): any {
    var valuesArray = value.split("~");
    var valuesArrayLenght = valuesArray.length;
    var mask = valuesArray[valuesArrayLenght-1];
    var maskInt = parseInt(mask,16);
    var unpackedCurrent = {};
    var currentField = 0;
    for(var property in this.CCCCURRENTFIELDS)
    {
        if(this.CCCCURRENTFIELDS[property] === 0)
        {
            unpackedCurrent[property] = valuesArray[currentField];
            currentField++;
        }
        else if(maskInt&this.CCCCURRENTFIELDS[property])
        {
			//i know this is a hack, for cccagg, future code please don't hate me:(, i did this to avoid
			//subscribing to trades as well in order to show the last market
         	if(property === 'LASTMARKET'){
                unpackedCurrent[property] = valuesArray[currentField];
            }else{
                 unpackedCurrent[property] = parseFloat(valuesArray[currentField]);
            }
            currentField++;
        }
    }
    
    return unpackedCurrent;
}

CCCCURRENTFIELDS={
    'TYPE'            : 0x0       // hex for binary 0, it is a special case of fields that are always there
  , 'MARKET'          : 0x0       // hex for binary 0, it is a special case of fields that are always there
  , 'FROMSYMBOL'      : 0x0       // hex for binary 0, it is a special case of fields that are always there
  , 'TOSYMBOL'        : 0x0       // hex for binary 0, it is a special case of fields that are always there
  , 'FLAGS'           : 0x0       // hex for binary 0, it is a special case of fields that are always there
  , 'PRICE'           : 0x1       // hex for binary 1
  , 'BID'             : 0x2       // hex for binary 10
  , 'OFFER'           : 0x4       // hex for binary 100
  , 'LASTUPDATE'      : 0x8       // hex for binary 1000
  , 'AVG'             : 0x10      // hex for binary 10000
  , 'LASTVOLUME'      : 0x20      // hex for binary 100000
  , 'LASTVOLUMETO'    : 0x40      // hex for binary 1000000
  , 'LASTTRADEID'     : 0x80      // hex for binary 10000000
  , 'VOLUMEHOUR'      : 0x100     // hex for binary 100000000
  , 'VOLUMEHOURTO'    : 0x200     // hex for binary 1000000000
  , 'VOLUME24HOUR'    : 0x400     // hex for binary 10000000000
  , 'VOLUME24HOURTO'  : 0x800     // hex for binary 100000000000
  , 'OPENHOUR'        : 0x1000    // hex for binary 1000000000000
  , 'HIGHHOUR'        : 0x2000    // hex for binary 10000000000000
  , 'LOWHOUR'         : 0x4000    // hex for binary 100000000000000
  , 'OPEN24HOUR'      : 0x8000    // hex for binary 1000000000000000
  , 'HIGH24HOUR'      : 0x10000   // hex for binary 10000000000000000
  , 'LOW24HOUR'       : 0x20000   // hex for binary 100000000000000000
  , 'LASTMARKET'      : 0x40000   // hex for binary 1000000000000000000, this is a special case and will only appear on CCCAGG messages
}

}
