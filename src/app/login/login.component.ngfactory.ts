/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from './login.component.css.shim.ngstyle';
import * as i1 from '@angular/core';
import * as i2 from './login.component';
import * as i3 from '@angular/forms';
import * as i4 from '@angular/common';
import * as i5 from '../http-service/connect.service';
import * as i6 from '../auth.service';
const styles_LoginComponent:any[] = [i0.styles];
export const RenderType_LoginComponent:i1.RendererType2 = i1.ɵcrt({encapsulation:0,
    styles:styles_LoginComponent,data:{}});
function View_LoginComponent_1(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),1,'span',[['class',
      'help-block']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted((null as any),['Favor de Introducir un Email valido!']))],(null as any),
      (null as any));
}
export function View_LoginComponent_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),54,'form',[['class',
      'form-horizontal'],['novalidate','']],[[2,'ng-untouched',(null as any)],[2,'ng-touched',
      (null as any)],[2,'ng-pristine',(null as any)],[2,'ng-dirty',(null as any)],
      [2,'ng-valid',(null as any)],[2,'ng-invalid',(null as any)],[2,'ng-pending',
          (null as any)]],[[(null as any),'ngSubmit'],[(null as any),'submit'],[(null as any),
      'reset']],(_v,en,$event) => {
    var ad:boolean = true;
    var _co:i2.LoginComponent = _v.component;
    if (('submit' === en)) {
      const pd_0:any = ((<any>i1.ɵnov(_v,2).onSubmit($event)) !== false);
      ad = (pd_0 && ad);
    }
    if (('reset' === en)) {
      const pd_1:any = ((<any>i1.ɵnov(_v,2).onReset()) !== false);
      ad = (pd_1 && ad);
    }
    if (('ngSubmit' === en)) {
      const pd_2:any = ((<any>_co.onSubmit(i1.ɵnov(_v,2))) !== false);
      ad = (pd_2 && ad);
    }
    return ad;
  },(null as any),(null as any))),i1.ɵdid(16384,(null as any),0,i3.ɵbf,([] as any[]),
      (null as any),(null as any)),i1.ɵdid(16384,[['f',4]],0,i3.NgForm,[[8,(null as any)],
      [8,(null as any)]],(null as any),{ngSubmit:'ngSubmit'}),i1.ɵprd(2048,(null as any),
      i3.ControlContainer,(null as any),[i3.NgForm]),i1.ɵdid(16384,(null as any),0,
      i3.NgControlStatusGroup,[i3.ControlContainer],(null as any),(null as any)),(_l()(),
      i1.ɵted((null as any),['\n  '])),(_l()(),i1.ɵeld(0,(null as any),(null as any),
      20,'div',[['class','form-group']],(null as any),(null as any),(null as any),
      (null as any),(null as any))),(_l()(),i1.ɵted((null as any),['\n    '])),(_l()(),
      i1.ɵeld(0,(null as any),(null as any),1,'label',[['class','col-sm-2 control-label'],
          ['for','inputEmail3']],(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i1.ɵted((null as any),['Username'])),(_l()(),i1.ɵted((null as any),
      ['\n    '])),(_l()(),i1.ɵeld(0,(null as any),(null as any),14,'div',[['class',
      'col-sm-10']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted((null as any),['\n      '])),(_l()(),i1.ɵeld(0,(null as any),
          (null as any),8,'input',[['class','form-control'],['email',''],['id','inputEmail3'],
              ['name','username'],['ngModel',''],['placeholder','Email'],['required',
                  ''],['style','width: 300px'],['type','email']],[[1,'required',0],
              [2,'ng-untouched',(null as any)],[2,'ng-touched',(null as any)],[2,'ng-pristine',
                  (null as any)],[2,'ng-dirty',(null as any)],[2,'ng-valid',(null as any)],
              [2,'ng-invalid',(null as any)],[2,'ng-pending',(null as any)]],[[(null as any),
              'input'],[(null as any),'blur'],[(null as any),'compositionstart'],[(null as any),
              'compositionend']],(_v,en,$event) => {
            var ad:boolean = true;
            if (('input' === en)) {
              const pd_0:any = ((<any>i1.ɵnov(_v,14)._handleInput($event.target.value)) !== false);
              ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
              const pd_1:any = ((<any>i1.ɵnov(_v,14).onTouched()) !== false);
              ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
              const pd_2:any = ((<any>i1.ɵnov(_v,14)._compositionStart()) !== false);
              ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
              const pd_3:any = ((<any>i1.ɵnov(_v,14)._compositionEnd($event.target.value)) !== false);
              ad = (pd_3 && ad);
            }
            return ad;
          },(null as any),(null as any))),i1.ɵdid(16384,(null as any),0,i3.DefaultValueAccessor,
          [i1.Renderer2,i1.ElementRef,[2,i3.COMPOSITION_BUFFER_MODE]],(null as any),
          (null as any)),i1.ɵdid(16384,(null as any),0,i3.RequiredValidator,([] as any[]),
          {required:[0,'required']},(null as any)),i1.ɵdid(16384,(null as any),0,i3.EmailValidator,
          ([] as any[]),{email:[0,'email']},(null as any)),i1.ɵprd(1024,(null as any),
          i3.NG_VALIDATORS,(p0_0:any,p1_0:any) => {
            return [p0_0,p1_0];
          },[i3.RequiredValidator,i3.EmailValidator]),i1.ɵprd(1024,(null as any),i3.NG_VALUE_ACCESSOR,
          (p0_0:any) => {
            return [p0_0];
          },[i3.DefaultValueAccessor]),i1.ɵdid(671744,[['email',4]],0,i3.NgModel,[[2,
          i3.ControlContainer],[2,i3.NG_VALIDATORS],[8,(null as any)],[2,i3.NG_VALUE_ACCESSOR]],
          {name:[0,'name'],model:[1,'model']},(null as any)),i1.ɵprd(2048,(null as any),
          i3.NgControl,(null as any),[i3.NgModel]),i1.ɵdid(16384,(null as any),0,i3.NgControlStatus,
          [i3.NgControl],(null as any),(null as any)),(_l()(),i1.ɵted((null as any),
          ['\n      '])),(_l()(),i1.ɵand(16777216,(null as any),(null as any),1,(null as any),
          View_LoginComponent_1)),i1.ɵdid(16384,(null as any),0,i4.NgIf,[i1.ViewContainerRef,
          i1.TemplateRef],{ngIf:[0,'ngIf']},(null as any)),(_l()(),i1.ɵted((null as any),
          ['\n    '])),(_l()(),i1.ɵted((null as any),['\n  '])),(_l()(),i1.ɵted((null as any),
          ['\n  '])),(_l()(),i1.ɵeld(0,(null as any),(null as any),16,'div',[['class',
          'form-group']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted((null as any),['\n    '])),(_l()(),i1.ɵeld(0,(null as any),(null as any),
          1,'label',[['class','col-sm-2 control-label'],['for','inputPassword3']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted((null as any),['Password'])),(_l()(),i1.ɵted((null as any),['\n    '])),
      (_l()(),i1.ɵeld(0,(null as any),(null as any),10,'div',[['class','col-sm-10']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted((null as any),['\n      '])),(_l()(),i1.ɵeld(0,(null as any),
          (null as any),7,'input',[['class','form-control'],['id','inputPassword3'],
              ['name','password'],['ngModel',''],['placeholder','Password'],['required',
                  ''],['style','width: 300px'],['type','password']],[[1,'required',
              0],[2,'ng-untouched',(null as any)],[2,'ng-touched',(null as any)],[2,
              'ng-pristine',(null as any)],[2,'ng-dirty',(null as any)],[2,'ng-valid',
              (null as any)],[2,'ng-invalid',(null as any)],[2,'ng-pending',(null as any)]],
          [[(null as any),'input'],[(null as any),'blur'],[(null as any),'compositionstart'],
              [(null as any),'compositionend']],(_v,en,$event) => {
            var ad:boolean = true;
            if (('input' === en)) {
              const pd_0:any = ((<any>i1.ɵnov(_v,36)._handleInput($event.target.value)) !== false);
              ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
              const pd_1:any = ((<any>i1.ɵnov(_v,36).onTouched()) !== false);
              ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
              const pd_2:any = ((<any>i1.ɵnov(_v,36)._compositionStart()) !== false);
              ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
              const pd_3:any = ((<any>i1.ɵnov(_v,36)._compositionEnd($event.target.value)) !== false);
              ad = (pd_3 && ad);
            }
            return ad;
          },(null as any),(null as any))),i1.ɵdid(16384,(null as any),0,i3.DefaultValueAccessor,
          [i1.Renderer2,i1.ElementRef,[2,i3.COMPOSITION_BUFFER_MODE]],(null as any),
          (null as any)),i1.ɵdid(16384,(null as any),0,i3.RequiredValidator,([] as any[]),
          {required:[0,'required']},(null as any)),i1.ɵprd(1024,(null as any),i3.NG_VALIDATORS,
          (p0_0:any) => {
            return [p0_0];
          },[i3.RequiredValidator]),i1.ɵprd(1024,(null as any),i3.NG_VALUE_ACCESSOR,
          (p0_0:any) => {
            return [p0_0];
          },[i3.DefaultValueAccessor]),i1.ɵdid(671744,(null as any),0,i3.NgModel,[[2,
          i3.ControlContainer],[2,i3.NG_VALIDATORS],[8,(null as any)],[2,i3.NG_VALUE_ACCESSOR]],
          {name:[0,'name'],model:[1,'model']},(null as any)),i1.ɵprd(2048,(null as any),
          i3.NgControl,(null as any),[i3.NgModel]),i1.ɵdid(16384,(null as any),0,i3.NgControlStatus,
          [i3.NgControl],(null as any),(null as any)),(_l()(),i1.ɵted((null as any),
          ['\n    '])),(_l()(),i1.ɵted((null as any),['\n  '])),(_l()(),i1.ɵted((null as any),
          ['\n  '])),(_l()(),i1.ɵeld(0,(null as any),(null as any),7,'div',[['class',
          'form-group']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted((null as any),['\n    '])),(_l()(),i1.ɵeld(0,(null as any),(null as any),
          4,'div',[['class','col-sm-offset-2 col-sm-10']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i1.ɵted((null as any),
          ['\n      '])),(_l()(),i1.ɵeld(0,(null as any),(null as any),1,'button',
          [['class','btn btn-default'],['type','submit']],[[8,'disabled',0]],(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i1.ɵted((null as any),
          ['Login'])),(_l()(),i1.ɵted((null as any),['\n    '])),(_l()(),i1.ɵted((null as any),
          ['\n  '])),(_l()(),i1.ɵted((null as any),['\n'])),(_l()(),i1.ɵted((null as any),
          ['\n']))],(_ck,_v) => {
    const currVal_15:any = '';
    _ck(_v,15,0,currVal_15);
    const currVal_16:any = '';
    _ck(_v,16,0,currVal_16);
    const currVal_17:any = 'username';
    const currVal_18:any = '';
    _ck(_v,19,0,currVal_17,currVal_18);
    const currVal_19:boolean = (!i1.ɵnov(_v,19).valid && i1.ɵnov(_v,19).touched);
    _ck(_v,24,0,currVal_19);
    const currVal_28:any = '';
    _ck(_v,37,0,currVal_28);
    const currVal_29:any = 'password';
    const currVal_30:any = '';
    _ck(_v,40,0,currVal_29,currVal_30);
  },(_ck,_v) => {
    const currVal_0:any = i1.ɵnov(_v,4).ngClassUntouched;
    const currVal_1:any = i1.ɵnov(_v,4).ngClassTouched;
    const currVal_2:any = i1.ɵnov(_v,4).ngClassPristine;
    const currVal_3:any = i1.ɵnov(_v,4).ngClassDirty;
    const currVal_4:any = i1.ɵnov(_v,4).ngClassValid;
    const currVal_5:any = i1.ɵnov(_v,4).ngClassInvalid;
    const currVal_6:any = i1.ɵnov(_v,4).ngClassPending;
    _ck(_v,0,0,currVal_0,currVal_1,currVal_2,currVal_3,currVal_4,currVal_5,currVal_6);
    const currVal_7:any = (i1.ɵnov(_v,15).required? '': (null as any));
    const currVal_8:any = i1.ɵnov(_v,21).ngClassUntouched;
    const currVal_9:any = i1.ɵnov(_v,21).ngClassTouched;
    const currVal_10:any = i1.ɵnov(_v,21).ngClassPristine;
    const currVal_11:any = i1.ɵnov(_v,21).ngClassDirty;
    const currVal_12:any = i1.ɵnov(_v,21).ngClassValid;
    const currVal_13:any = i1.ɵnov(_v,21).ngClassInvalid;
    const currVal_14:any = i1.ɵnov(_v,21).ngClassPending;
    _ck(_v,13,0,currVal_7,currVal_8,currVal_9,currVal_10,currVal_11,currVal_12,currVal_13,
        currVal_14);
    const currVal_20:any = (i1.ɵnov(_v,37).required? '': (null as any));
    const currVal_21:any = i1.ɵnov(_v,42).ngClassUntouched;
    const currVal_22:any = i1.ɵnov(_v,42).ngClassTouched;
    const currVal_23:any = i1.ɵnov(_v,42).ngClassPristine;
    const currVal_24:any = i1.ɵnov(_v,42).ngClassDirty;
    const currVal_25:any = i1.ɵnov(_v,42).ngClassValid;
    const currVal_26:any = i1.ɵnov(_v,42).ngClassInvalid;
    const currVal_27:any = i1.ɵnov(_v,42).ngClassPending;
    _ck(_v,35,0,currVal_20,currVal_21,currVal_22,currVal_23,currVal_24,currVal_25,
        currVal_26,currVal_27);
    const currVal_31:boolean = !i1.ɵnov(_v,2).valid;
    _ck(_v,50,0,currVal_31);
  });
}
export function View_LoginComponent_Host_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),1,'app-login',([] as any[]),
      (null as any),(null as any),(null as any),View_LoginComponent_0,RenderType_LoginComponent)),
      i1.ɵdid(114688,(null as any),0,i2.LoginComponent,[i5.ConnectService,i6.AuthService],
          (null as any),(null as any))],(_ck,_v) => {
    _ck(_v,1,0);
  },(null as any));
}
export const LoginComponentNgFactory:i1.ComponentFactory<i2.LoginComponent> = i1.ɵccf('app-login',
    i2.LoginComponent,View_LoginComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMvSUJNX0FETUlOL0RvY3VtZW50cy9Qcm9qZWN0cy9wZXJzb25hbC9DbG91ZFZlcmFuby9zcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9DOi9Vc2Vycy9JQk1fQURNSU4vRG9jdW1lbnRzL1Byb2plY3RzL3BlcnNvbmFsL0Nsb3VkVmVyYW5vL3NyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnRzIiwibmc6Ly8vQzovVXNlcnMvSUJNX0FETUlOL0RvY3VtZW50cy9Qcm9qZWN0cy9wZXJzb25hbC9DbG91ZFZlcmFuby9zcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5odG1sIiwibmc6Ly8vQzovVXNlcnMvSUJNX0FETUlOL0RvY3VtZW50cy9Qcm9qZWN0cy9wZXJzb25hbC9DbG91ZFZlcmFuby9zcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC50cy5Mb2dpbkNvbXBvbmVudF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIjxmb3JtIGNsYXNzPVwiZm9ybS1ob3Jpem9udGFsXCIgKG5nU3VibWl0KT1cIm9uU3VibWl0KGYpXCIgI2Y9XCJuZ0Zvcm1cIiA+XG4gIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgPGxhYmVsIGZvcj1cImlucHV0RW1haWwzXCIgY2xhc3M9XCJjb2wtc20tMiBjb250cm9sLWxhYmVsXCI+VXNlcm5hbWU8L2xhYmVsPlxuICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTBcIj5cbiAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwiaW5wdXRFbWFpbDNcIiBcbiAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIiBzdHlsZT1cIndpZHRoOiAzMDBweFwiIG5nTW9kZWwgbmFtZT1cInVzZXJuYW1lXCIgcmVxdWlyZWQgZW1haWwgI2VtYWlsPVwibmdNb2RlbFwiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwLWJsb2NrXCIgKm5nSWY9XCIhZW1haWwudmFsaWQgJiYgZW1haWwudG91Y2hlZFwiPkZhdm9yIGRlIEludHJvZHVjaXIgdW4gRW1haWwgdmFsaWRvITwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgPGxhYmVsIGZvcj1cImlucHV0UGFzc3dvcmQzXCIgY2xhc3M9XCJjb2wtc20tMiBjb250cm9sLWxhYmVsXCI+UGFzc3dvcmQ8L2xhYmVsPlxuICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTBcIj5cbiAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwiaW5wdXRQYXNzd29yZDNcIiBcbiAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiBzdHlsZT1cIndpZHRoOiAzMDBweFwiIG5nTW9kZWwgbmFtZT1cInBhc3N3b3JkXCIgcmVxdWlyZWQ+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tb2Zmc2V0LTIgY29sLXNtLTEwXCI+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiIFtkaXNhYmxlZF09XCIhZi52YWxpZFwiPkxvZ2luPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9mb3JtPlxuIiwiPGFwcC1sb2dpbj48L2FwcC1sb2dpbj4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQ01NO01BQUE7TUFBK0Q7Ozs7b0JBTnJFO01BQUE7TUFBQTtNQUFBO1VBQUE7TUFBQTtJQUFBO0lBQUE7SUFBQTtNQUFBO01BQUE7SUFBQTtJQUFBO01BQUE7TUFBQTtJQUFBO0lBQThCO01BQUE7TUFBQTtJQUFBO0lBQTlCO0VBQUEsdUNBQUE7TUFBQSxvQ0FBQTtNQUFBLCtEQUFBOzBCQUFBLGtDQUFBOzhCQUFBLG1EQUFvRTthQUFBLDBCQUNsRTtNQUFBO01BQUEsOEJBQXdCLDJDQUN0QjthQUFBO1VBQUE7VUFBQSxnQkFBd0QsNkNBQWdCO01BQUEsYUFDeEU7TUFBQTtNQUF1Qiw2Q0FDckI7VUFBQTtjQUFBO2tCQUFBO2NBQUE7a0JBQUE7Y0FBQTtjQUFBO2NBQUE7WUFBQTtZQUFBO2NBQUE7Y0FBQTtZQUFBO1lBQUE7Y0FBQTtjQUFBO1lBQUE7WUFBQTtjQUFBO2NBQUE7WUFBQTtZQUFBO2NBQUE7Y0FBQTtZQUFBO1lBQUE7VUFBQSx1Q0FBQTtVQUFBO1VBQUEsc0JBQUE7VUFBQSxnREFBQTtVQUFBLHdEQUFBOzJCQUFBO1lBQUE7VUFBQTtVQUFBO1lBQUE7VUFBQSxvQ0FBQTs2QkFBQTtVQUFBLDBEQUFBO3VCQUFBLG1DQUFBO1VBQUEsNENBQ2lHO1VBQUEsZUFDakc7VUFBQSwrQkFBQTt3QkFBQSxtQ0FBMEc7VUFBQSxhQUN0Ryx5Q0FDRjtVQUFBLFdBQ047VUFBQTtNQUF3QiwyQ0FDdEI7VUFBQTtVQUFBO01BQTJELDZDQUFnQjtNQUMzRTtVQUFBO01BQXVCLDZDQUNyQjtVQUFBO2NBQUE7a0JBQUE7Y0FBQTtjQUFBO2NBQUE7VUFBQTtjQUFBO1lBQUE7WUFBQTtjQUFBO2NBQUE7WUFBQTtZQUFBO2NBQUE7Y0FBQTtZQUFBO1lBQUE7Y0FBQTtjQUFBO1lBQUE7WUFBQTtjQUFBO2NBQUE7WUFBQTtZQUFBO1VBQUEsdUNBQUE7VUFBQTtVQUFBLHNCQUFBO1VBQUEsZ0RBQUE7VUFBQTtZQUFBO1VBQUE7VUFBQTtZQUFBO1VBQUEsb0NBQUE7NkJBQUE7VUFBQSwwREFBQTt1QkFBQSxtQ0FBQTtVQUFBLDRDQUM2RTtVQUFBLGFBQ3pFLHlDQUNGO1VBQUEsV0FDTjtVQUFBO01BQXdCLDJDQUN0QjtVQUFBO1VBQUEsNENBQXVDO1VBQUEsZUFDckM7VUFBQTtVQUFBLDRDQUFvRTtVQUFBLFlBQWMsMkNBQzlFO1VBQUEsV0FDRix1Q0FDRDtVQUFBO0lBaEJnRTtJQURqRSxZQUNpRSxVQURqRTtJQUMwRTtJQUQxRSxZQUMwRSxVQUQxRTtJQUNpRDtJQUFSO0lBRHpDLFlBQ2lELFdBQVIsVUFEekM7SUFFeUI7SUFBekIsWUFBeUIsVUFBekI7SUFPb0U7SUFEcEUsWUFDb0UsVUFEcEU7SUFDb0Q7SUFBUjtJQUQ1QyxZQUNvRCxXQUFSLFVBRDVDOztJQVpOO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUEsV0FBQSxxRUFBQTtJQUlNO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQSxZQUFBLFVBQUE7UUFBQSxVQUFBO0lBUUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBLFlBQUEsV0FBQTtRQUFBLHFCQUFBO0lBTThDO0lBQTlDLFlBQThDLFVBQTlDOzs7O29CQ2xCTjtNQUFBO2FBQUE7VUFBQTtJQUFBOzs7OyJ9
