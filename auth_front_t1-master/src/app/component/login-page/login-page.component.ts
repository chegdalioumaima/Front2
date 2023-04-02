import {Component, OnInit} from '@angular/core';
import { Users } from 'src/app/model/Users';
import {UserService} from '../../services/user-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  myimage:string = "assets/images/image.png"
  omni:string = "assets/images/omni.png"

  errors: string | null = null;

  constructor(private UserService: UserService) {
  }

  ngOnInit(): void {
  }


  login(email: string, password: string): void {
    this.UserService.login({...Users,email, password}).subscribe((response: any) => {
      console.log(response);
      if (response.status) {
        alert("logged succefully")
      } else {
        this.errors = response.error;
      }
    });
  }
}
