/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from './app.module';
import * as i2 from './app.component';
import * as i3 from './signup/signup.component.ngfactory';
import * as i4 from './login/login.component.ngfactory';
import * as i5 from './home/home.component.ngfactory';
import * as i6 from './dashboard/dashboard.component.ngfactory';
import * as i7 from './app.component.ngfactory';
import * as i8 from '@angular/common';
import * as i9 from '@angular/platform-browser';
import * as i10 from '@angular/http';
import * as i11 from '@angular/forms';
import * as i12 from '@angular/router';
import * as i13 from 'ng-socket-io/socket-io.service';
import * as i14 from 'ng-socket-io/socket-io.module';
import * as i15 from './market-service/market-service.service';
import * as i16 from './http-service/connect.service';
import * as i17 from './auth.service';
import * as i18 from './auth-guard.service';
import * as i19 from './signup/signup.component';
import * as i20 from './login/login.component';
import * as i21 from './home/home.component';
import * as i22 from './dashboard/dashboard.component';
export const AppModuleNgFactory:i0.NgModuleFactory<i1.AppModule> = i0.ɵcmf(i1.AppModule,
    [i2.AppComponent],(_l:any) => {
      return i0.ɵmod([i0.ɵmpd(512,i0.ComponentFactoryResolver,i0.ɵCodegenComponentFactoryResolver,
          [[8,[i3.SignupComponentNgFactory,i4.LoginComponentNgFactory,i5.HomeComponentNgFactory,
              i6.DashboardComponentNgFactory,i7.AppComponentNgFactory]],[3,i0.ComponentFactoryResolver],
              i0.NgModuleRef]),i0.ɵmpd(5120,i0.LOCALE_ID,i0.ɵm,[[3,i0.LOCALE_ID]]),
          i0.ɵmpd(4608,i8.NgLocalization,i8.NgLocaleLocalization,[i0.LOCALE_ID]),i0.ɵmpd(5120,
              i0.APP_ID,i0.ɵf,([] as any[])),i0.ɵmpd(5120,i0.IterableDiffers,i0.ɵk,
              ([] as any[])),i0.ɵmpd(5120,i0.KeyValueDiffers,i0.ɵl,([] as any[])),
          i0.ɵmpd(4608,i9.DomSanitizer,i9.ɵe,[i8.DOCUMENT]),i0.ɵmpd(6144,i0.Sanitizer,
              (null as any),[i9.DomSanitizer]),i0.ɵmpd(4608,i9.HAMMER_GESTURE_CONFIG,
              i9.HammerGestureConfig,([] as any[])),i0.ɵmpd(5120,i9.EVENT_MANAGER_PLUGINS,
              (p0_0:any,p1_0:any,p2_0:any,p2_1:any) => {
                return [new i9.ɵDomEventsPlugin(p0_0),new i9.ɵKeyEventsPlugin(p1_0),
                    new i9.ɵHammerGesturesPlugin(p2_0,p2_1)];
              },[i8.DOCUMENT,i8.DOCUMENT,i8.DOCUMENT,i9.HAMMER_GESTURE_CONFIG]),i0.ɵmpd(4608,
              i9.EventManager,i9.EventManager,[i9.EVENT_MANAGER_PLUGINS,i0.NgZone]),
          i0.ɵmpd(135680,i9.ɵDomSharedStylesHost,i9.ɵDomSharedStylesHost,[i8.DOCUMENT]),
          i0.ɵmpd(4608,i9.ɵDomRendererFactory2,i9.ɵDomRendererFactory2,[i9.EventManager,
              i9.ɵDomSharedStylesHost]),i0.ɵmpd(6144,i0.RendererFactory2,(null as any),
              [i9.ɵDomRendererFactory2]),i0.ɵmpd(6144,i9.ɵSharedStylesHost,(null as any),
              [i9.ɵDomSharedStylesHost]),i0.ɵmpd(4608,i0.Testability,i0.Testability,
              [i0.NgZone]),i0.ɵmpd(4608,i9.Meta,i9.Meta,[i8.DOCUMENT]),i0.ɵmpd(4608,
              i9.Title,i9.Title,[i8.DOCUMENT]),i0.ɵmpd(4608,i10.BrowserXhr,i10.BrowserXhr,
              ([] as any[])),i0.ɵmpd(4608,i10.ResponseOptions,i10.BaseResponseOptions,
              ([] as any[])),i0.ɵmpd(5120,i10.XSRFStrategy,i10.ɵb,([] as any[])),i0.ɵmpd(4608,
              i10.XHRBackend,i10.XHRBackend,[i10.BrowserXhr,i10.ResponseOptions,i10.XSRFStrategy]),
          i0.ɵmpd(4608,i10.RequestOptions,i10.BaseRequestOptions,([] as any[])),i0.ɵmpd(5120,
              i10.Http,i10.ɵc,[i10.XHRBackend,i10.RequestOptions]),i0.ɵmpd(4608,i11.ɵi,
              i11.ɵi,([] as any[])),i0.ɵmpd(5120,i12.ActivatedRoute,i12.ɵf,[i12.Router]),
          i0.ɵmpd(4608,i12.NoPreloading,i12.NoPreloading,([] as any[])),i0.ɵmpd(6144,
              i12.PreloadingStrategy,(null as any),[i12.NoPreloading]),i0.ɵmpd(135680,
              i12.RouterPreloader,i12.RouterPreloader,[i12.Router,i0.NgModuleFactoryLoader,
                  i0.Compiler,i0.Injector,i12.PreloadingStrategy]),i0.ɵmpd(4608,i12.PreloadAllModules,
              i12.PreloadAllModules,([] as any[])),i0.ɵmpd(5120,i12.ROUTER_INITIALIZER,
              i12.ɵi,[i12.ɵg]),i0.ɵmpd(5120,i0.APP_BOOTSTRAP_LISTENER,(p0_0:any) => {
            return [p0_0];
          },[i12.ROUTER_INITIALIZER]),i0.ɵmpd(5120,i13.WrappedSocket,i14.SocketFactory,
              ['__SOCKET_IO_CONFIG__']),i0.ɵmpd(4608,i15.MarketServiceService,i15.MarketServiceService,
              [i13.WrappedSocket]),i0.ɵmpd(4608,i16.ConnectService,i16.ConnectService,
              [i10.Http]),i0.ɵmpd(4608,i17.AuthService,i17.AuthService,([] as any[])),
          i0.ɵmpd(4608,i18.AuthGuard,i18.AuthGuard,[i17.AuthService,i12.Router]),i0.ɵmpd(512,
              i8.CommonModule,i8.CommonModule,([] as any[])),i0.ɵmpd(1024,i0.ErrorHandler,
              i9.ɵa,([] as any[])),i0.ɵmpd(1024,i0.NgProbeToken,() => {
            return [i12.ɵb()];
          },([] as any[])),i0.ɵmpd(512,i12.ɵg,i12.ɵg,[i0.Injector]),i0.ɵmpd(1024,i0.APP_INITIALIZER,
              (p0_0:any,p0_1:any,p1_0:any) => {
                return [i9.ɵc(p0_0,p0_1),i12.ɵh(p1_0)];
              },[[2,i9.NgProbeToken],[2,i0.NgProbeToken],i12.ɵg]),i0.ɵmpd(512,i0.ApplicationInitStatus,
              i0.ApplicationInitStatus,[[2,i0.APP_INITIALIZER]]),i0.ɵmpd(131584,i0.ɵe,
              i0.ɵe,[i0.NgZone,i0.ɵConsole,i0.Injector,i0.ErrorHandler,i0.ComponentFactoryResolver,
                  i0.ApplicationInitStatus]),i0.ɵmpd(2048,i0.ApplicationRef,(null as any),
              [i0.ɵe]),i0.ɵmpd(512,i0.ApplicationModule,i0.ApplicationModule,[i0.ApplicationRef]),
          i0.ɵmpd(512,i9.BrowserModule,i9.BrowserModule,[[3,i9.BrowserModule]]),i0.ɵmpd(1024,
              i12.ɵa,i12.ɵd,[[3,i12.Router]]),i0.ɵmpd(512,i12.UrlSerializer,i12.DefaultUrlSerializer,
              ([] as any[])),i0.ɵmpd(512,i12.ChildrenOutletContexts,i12.ChildrenOutletContexts,
              ([] as any[])),i0.ɵmpd(256,i12.ROUTER_CONFIGURATION,{},([] as any[])),
          i0.ɵmpd(1024,i8.LocationStrategy,i12.ɵc,[i8.PlatformLocation,[2,i8.APP_BASE_HREF],
              i12.ROUTER_CONFIGURATION]),i0.ɵmpd(512,i8.Location,i8.Location,[i8.LocationStrategy]),
          i0.ɵmpd(512,i0.Compiler,i0.Compiler,([] as any[])),i0.ɵmpd(512,i0.NgModuleFactoryLoader,
              i0.SystemJsNgModuleLoader,[i0.Compiler,[2,i0.SystemJsNgModuleLoaderConfig]]),
          i0.ɵmpd(1024,i12.ROUTES,() => {
            return [[{path:'signup',component:i19.SignupComponent},{path:'login',component:i20.LoginComponent},
                {path:'',component:i21.HomeComponent},{path:'dashboard',component:i22.DashboardComponent}]];
          },([] as any[])),i0.ɵmpd(1024,i12.Router,i12.ɵe,[i0.ApplicationRef,i12.UrlSerializer,
              i12.ChildrenOutletContexts,i8.Location,i0.Injector,i0.NgModuleFactoryLoader,
              i0.Compiler,i12.ROUTES,i12.ROUTER_CONFIGURATION,[2,i12.UrlHandlingStrategy],
              [2,i12.RouteReuseStrategy]]),i0.ɵmpd(512,i12.RouterModule,i12.RouterModule,
              [[2,i12.ɵa],[2,i12.Router]]),i0.ɵmpd(512,i14.SocketIoModule,i14.SocketIoModule,
              ([] as any[])),i0.ɵmpd(512,i10.HttpModule,i10.HttpModule,([] as any[])),
          i0.ɵmpd(512,i11.ɵba,i11.ɵba,([] as any[])),i0.ɵmpd(512,i11.FormsModule,i11.FormsModule,
              ([] as any[])),i0.ɵmpd(512,i1.AppModule,i1.AppModule,([] as any[])),
          i0.ɵmpd(256,'__SOCKET_IO_CONFIG__',{url:'https://streamer.cryptocompare.com',
              options:{}},([] as any[]))]);
    });
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMvSUJNX0FETUlOL0RvY3VtZW50cy9Qcm9qZWN0cy9wZXJzb25hbC9DbG91ZFZlcmFuby9zcmMvYXBwL2FwcC5tb2R1bGUubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vQzovVXNlcnMvSUJNX0FETUlOL0RvY3VtZW50cy9Qcm9qZWN0cy9wZXJzb25hbC9DbG91ZFZlcmFuby9zcmMvYXBwL2FwcC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiICJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
