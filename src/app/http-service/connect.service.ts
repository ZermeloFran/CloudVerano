import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ConnectService {

  constructor(private http: Http) { }

  postSignupData(bodyPayload: any){
    return this.http.post('pathToJavaRestEndpoint', bodyPayload); //returns an Observable you can subscribe to
  }

}
