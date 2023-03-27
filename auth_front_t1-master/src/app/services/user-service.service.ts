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


  register(users:Users):Observable<Users>{
    return this.http.post<Users>('http://localhost:8080/api/register',users);
 }


  login(users:Users):Observable<Users>{
    return this.http.post<Users>('http://localhost:8080/api/login',users)
  }


}
