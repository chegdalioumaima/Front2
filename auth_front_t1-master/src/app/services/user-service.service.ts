import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Users } from '../model/Users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = "http://localhost:8080";
 

  constructor(private http: HttpClient) {
  }

  httpOptions: Object = {
    Headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  verify(code: string, email: string) {
    return this.http.post<any>(
      this.url + '/api/verify',
      {
        "verificationCode": code,
        "email": email
      },
      this.httpOptions);
  }


  register(users:Users,idrole:number):Observable<Users>{
    return this.http.post<Users>(this.url +'/api/register/'+idrole,users);
 }

 


  login(users:Users):Observable<Users>{
    return this.http.post<Users>(this.url +'/api/login',users)
  }

  check(users:Users):Observable<Users>{
    return this.http.post<Users>(this.url +'/api/check',users)
  }
  
  forgotPassword(email: string) {
    const url = 'http://localhost:8080/api/forgot_password';
    //const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = { email: email };
    return this.http.post(url, body );
  }


  resetPassword(token: string, password: string) {
    const body = { token: token, password: password };
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.url + '/api/reset_password', body, { headers: headers });
  }

  getRoles(){ 
    return this.http.get('http://localhost:8080/api/roles')
  }

  getUserss(){

    return this.http.get('http://localhost:8080/api/users');
}
  
}