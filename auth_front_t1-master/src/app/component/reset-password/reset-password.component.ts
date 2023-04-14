import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {UserService} from '../../services/user-service.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  tokenValue: string | undefined ;
  

  constructor(private route: ActivatedRoute,private UserService: UserService){
    //this.passwordsMatch = false;

  }
  ngOnInit(): void {
    this.tokenValue = this.route.snapshot.queryParamMap.get('token') || "";
  }

  omni:string = "assets/images/omni.png"
  password?: string;
  confirmPassword?: string;
  passwordsMatch: boolean = false;

 /* 
  checkPasswordsMatch() {
    if (this.password === this.confirmPassword) {
      this.passwordsMatch = true;
    } else {
      this.passwordsMatch = false;
    }
  }*/

  

  
  reset(token: string , password: string): void{
    this.UserService.resetPassword(token, password).subscribe(response => {
    alert('good')
  }, error => {
    alert("not good")
  });
  }
}
