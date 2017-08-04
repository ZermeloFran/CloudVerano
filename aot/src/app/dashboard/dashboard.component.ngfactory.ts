/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from './dashboard.component.css.shim.ngstyle';
import * as i1 from '@angular/core';
import * as i2 from '@angular/common';
import * as i3 from '../../../../src/app/dashboard/dashboard.component';
import * as i4 from '../../../../src/app/market-service/market-service.service';
const styles_DashboardComponent:any[] = [i0.styles];
export const RenderType_DashboardComponent:i1.RendererType2 = i1.ɵcrt({encapsulation:0,
    styles:styles_DashboardComponent,data:{}});
function View_DashboardComponent_1(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),19,'tr',([] as any[]),
      [[8,'className',0]],(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted((null as any),['\n      '])),(_l()(),i1.ɵeld(0,(null as any),
          (null as any),1,'td',([] as any[]),(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i1.ɵted((null as any),['',''])),(_l()(),
          i1.ɵted((null as any),['\n      '])),(_l()(),i1.ɵeld(0,(null as any),(null as any),
          1,'td',([] as any[]),(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i1.ɵted((null as any),['',''])),(_l()(),i1.ɵted((null as any),
          ['\n      '])),(_l()(),i1.ɵeld(0,(null as any),(null as any),1,'td',([] as any[]),
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted((null as any),['',''])),(_l()(),i1.ɵted((null as any),['\n      '])),
      (_l()(),i1.ɵeld(0,(null as any),(null as any),1,'td',([] as any[]),(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵted((null as any),
          ['',''])),(_l()(),i1.ɵted((null as any),['\n      '])),(_l()(),i1.ɵeld(0,
          (null as any),(null as any),1,'td',([] as any[]),(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i1.ɵted((null as any),
          ['',''])),(_l()(),i1.ɵted((null as any),['\n      '])),(_l()(),i1.ɵeld(0,
          (null as any),(null as any),1,'td',([] as any[]),(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i1.ɵted((null as any),
          ['',''])),(_l()(),i1.ɵted((null as any),['\n  ']))],(null as any),(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = _co.rowColor[_v.context.index];
    _ck(_v,0,0,currVal_0);
    const currVal_1:any = _v.context.$implicit;
    _ck(_v,3,0,currVal_1);
    const currVal_2:any = _co.currentPrices[_v.context.index];
    _ck(_v,6,0,currVal_2);
    const currVal_3:any = _co.avgPrice[_v.context.index];
    _ck(_v,9,0,currVal_3);
    const currVal_4:any = _co.high24Hrs[_v.context.index];
    _ck(_v,12,0,currVal_4);
    const currVal_5:any = _co.low24Hrs[_v.context.index];
    _ck(_v,15,0,currVal_5);
    const currVal_6:any = _co.lastMarket[_v.context.index];
    _ck(_v,18,0,currVal_6);
  });
}
export function View_DashboardComponent_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),26,'table',[['class',
      'table table-hover'],['style','width: 500px']],(null as any),(null as any),(null as any),
      (null as any),(null as any))),(_l()(),i1.ɵted((null as any),['\n  '])),(_l()(),
      i1.ɵeld(0,(null as any),(null as any),24,'tbody',([] as any[]),(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵeld(0,
      (null as any),(null as any),19,'tr',([] as any[]),(null as any),(null as any),
      (null as any),(null as any),(null as any))),(_l()(),i1.ɵted((null as any),['\n    '])),
      (_l()(),i1.ɵeld(0,(null as any),(null as any),1,'th',([] as any[]),(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵted((null as any),
          ['Symbol'])),(_l()(),i1.ɵted((null as any),['\n    '])),(_l()(),i1.ɵeld(0,
          (null as any),(null as any),1,'th',([] as any[]),(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i1.ɵted((null as any),
          ['Price'])),(_l()(),i1.ɵted((null as any),['\n    '])),(_l()(),i1.ɵeld(0,
          (null as any),(null as any),1,'th',([] as any[]),(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i1.ɵted((null as any),
          ['Avg'])),(_l()(),i1.ɵted((null as any),['\n    '])),(_l()(),i1.ɵeld(0,(null as any),
          (null as any),1,'th',([] as any[]),(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i1.ɵted((null as any),['High24Hrs'])),
      (_l()(),i1.ɵted((null as any),['\n    '])),(_l()(),i1.ɵeld(0,(null as any),(null as any),
          1,'th',([] as any[]),(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i1.ɵted((null as any),['Low24Hrs'])),(_l()(),i1.ɵted((null as any),
          ['\n    '])),(_l()(),i1.ɵeld(0,(null as any),(null as any),1,'th',([] as any[]),
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted((null as any),['LastMarket'])),(_l()(),i1.ɵted((null as any),
          ['\n  '])),(_l()(),i1.ɵted((null as any),['\n  '])),(_l()(),i1.ɵand(16777216,
          (null as any),(null as any),1,(null as any),View_DashboardComponent_1)),
      i1.ɵdid(802816,(null as any),0,i2.NgForOf,[i1.ViewContainerRef,i1.TemplateRef,
          i1.IterableDiffers],{ngForOf:[0,'ngForOf']},(null as any)),(_l()(),i1.ɵted((null as any),
          ['\n'])),(_l()(),i1.ɵted((null as any),['\n']))],(_ck,_v) => {
    var _co:i3.DashboardComponent = _v.component;
    const currVal_0:any = _co.currencyNames;
    _ck(_v,25,0,currVal_0);
  },(null as any));
}
export function View_DashboardComponent_Host_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),1,'app-dashboard',
      ([] as any[]),(null as any),(null as any),(null as any),View_DashboardComponent_0,
      RenderType_DashboardComponent)),i1.ɵdid(245760,(null as any),0,i3.DashboardComponent,
      [i4.MarketServiceService],(null as any),(null as any))],(_ck,_v) => {
    _ck(_v,1,0);
  },(null as any));
}
export const DashboardComponentNgFactory:i1.ComponentFactory<i3.DashboardComponent> = i1.ɵccf('app-dashboard',
    i3.DashboardComponent,View_DashboardComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMvSUJNX0FETUlOL0RvY3VtZW50cy9Qcm9qZWN0cy9wZXJzb25hbC9DbG91ZFZlcmFuby9zcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50Lm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL0M6L1VzZXJzL0lCTV9BRE1JTi9Eb2N1bWVudHMvUHJvamVjdHMvcGVyc29uYWwvQ2xvdWRWZXJhbm8vc3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC50cyIsIm5nOi8vL0M6L1VzZXJzL0lCTV9BRE1JTi9Eb2N1bWVudHMvUHJvamVjdHMvcGVyc29uYWwvQ2xvdWRWZXJhbm8vc3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5odG1sIiwibmc6Ly8vQzovVXNlcnMvSUJNX0FETUlOL0RvY3VtZW50cy9Qcm9qZWN0cy9wZXJzb25hbC9DbG91ZFZlcmFuby9zcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnRzLkRhc2hib2FyZENvbXBvbmVudF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIjx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLWhvdmVyXCIgc3R5bGU9XCJ3aWR0aDogNTAwcHhcIj5cclxuICA8dHI+XHJcbiAgICA8dGg+U3ltYm9sPC90aD5cclxuICAgIDx0aD5QcmljZTwvdGg+XHJcbiAgICA8dGg+QXZnPC90aD5cclxuICAgIDx0aD5IaWdoMjRIcnM8L3RoPlxyXG4gICAgPHRoPkxvdzI0SHJzPC90aD5cclxuICAgIDx0aD5MYXN0TWFya2V0PC90aD5cclxuICA8L3RyPlxyXG4gIDx0ciAqbmdGb3I9XCJsZXQgaXRlbSBvZiBjdXJyZW5jeU5hbWVzOyBpbmRleCBhcyBpXCIgW2NsYXNzXT1cInJvd0NvbG9yW2ldXCI+XHJcbiAgICAgIDx0ZD57e2l0ZW19fTwvdGQ+XHJcbiAgICAgIDx0ZD57e2N1cnJlbnRQcmljZXNbaV19fTwvdGQ+XHJcbiAgICAgIDx0ZD57e2F2Z1ByaWNlW2ldfX08L3RkPlxyXG4gICAgICA8dGQ+e3toaWdoMjRIcnNbaV19fTwvdGQ+XHJcbiAgICAgIDx0ZD57e2xvdzI0SHJzW2ldfX08L3RkPlxyXG4gICAgICA8dGQ+e3tsYXN0TWFya2V0W2ldfX08L3RkPlxyXG4gIDwvdHI+XHJcbjwvdGFibGU+XHJcbiIsIjxhcHAtZGFzaGJvYXJkPjwvYXBwLWRhc2hib2FyZD4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztvQkNTRTtNQUFBO01BQXlFLDZDQUNyRTtVQUFBO1VBQUEsOEJBQUksd0NBQWE7aUJBQUEsOEJBQ2pCO1VBQUE7VUFBQSxnQkFBSSx3Q0FBeUI7VUFBQSxlQUM3QjtVQUFBO01BQUksd0NBQW9CO01BQ3hCO1VBQUEsMERBQUk7VUFBQSxVQUFxQiw2Q0FDekI7VUFBQTtVQUFBLDRDQUFJO1VBQUEsVUFBb0IsNkNBQ3hCO1VBQUE7VUFBQSw0Q0FBSTtVQUFBLFVBQXNCOztJQU5xQjtJQUFuRCxXQUFtRCxTQUFuRDtJQUNRO0lBQUE7SUFDQTtJQUFBO0lBQ0E7SUFBQTtJQUNBO0lBQUE7SUFDQTtJQUFBO0lBQ0E7SUFBQTs7OztvQkFmVjtNQUFBO01BQUEsOEJBQXNELHlDQUNwRDthQUFBO1VBQUE7TUFBQTtNQUFBLDRDQUFJO01BQ0Y7VUFBQSwwREFBSTtVQUFBLGFBQVcsMkNBQ2Y7VUFBQTtVQUFBLDRDQUFJO1VBQUEsWUFBVSwyQ0FDZDtVQUFBO1VBQUEsNENBQUk7VUFBQSxVQUFRLDJDQUNaO1VBQUE7VUFBQSw4QkFBSTtNQUFjLDJDQUNsQjtVQUFBO1VBQUEsZ0JBQUksNkNBQWE7VUFBQSxhQUNqQjtVQUFBO01BQUksK0NBQWU7VUFBQSxXQUNoQix5Q0FDTDtVQUFBO2FBQUE7NEJBQUEseUNBT0s7VUFBQSxTQUNDOztJQVJGO0lBQUosWUFBSSxTQUFKOzs7O29CQ1RGO01BQUE7bUNBQUEsVUFBQTtNQUFBO0lBQUE7Ozs7In0=