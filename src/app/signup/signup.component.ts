import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Response } from '@angular/http';
import { ConnectService } from '../http-service/connect.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private http: ConnectService, private security: AuthService) { }

  ngOnInit() {
  }

  onSubmit(form : NgForm){
    this.http.postSignupData({'username':form.value.username, 'password':form.value.password}).subscribe(
      (response: Response)=>{this.security.loggedIn = true;},
      (error) =>{this.security.loggedIn = false;}
    );

  }

}
