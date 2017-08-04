import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ConnectService {

  constructor(private http: Http) { }

  postSignupData(bodyPayload: any){
    return this.http.post('http://cloud-env.vim8spm3k9.us-east-2.elasticbeanstalk.com/api/login', bodyPayload); //returns an Observable you can subscribe to
  }

  getLogin(){
    return this.http.get('http://cloud-env.vim8spm3k9.us-east-2.elasticbeanstalk.com/api/login');
  }

}
