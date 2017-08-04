import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { Response } from '@angular/http';
import { ConnectService } from '../http-service/connect.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: ConnectService, private security: AuthService) { }

  ngOnInit() {
  }

  onSubmit(form : NgForm){
/*    usernamea : String = (form.value.username).toString();
    const headers = new Headers({form.value.username :'application/json'});
    this.http.postSignupData({'username':form.value.username, 'password':form.value.password}).subscribe(
      (response: Response)=>{this.security.loggedIn = true;},
      (error) =>{this.security.loggedIn = false;}
    );*/

  }

}



