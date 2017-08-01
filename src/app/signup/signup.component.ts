import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ConnectService } from '../http-service/connect.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private http: ConnectService) { }

  ngOnInit() {
  }

  onSubmit(form : NgForm){
    form.value.username;
    form.value.password;
  }

}
