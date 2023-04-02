import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Users } from 'src/app/model/Users';
import {UserService} from '../../services/user-service.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  errors: string | null = null;
 
  myimage:string = "assets/images/image.png"


    
  constructor(private UserService: UserService, private fb:FormBuilder) {}
  

  

  ngOnInit(): void {
  }



  register(id:number,firstName: string, lastName: string, email: string, phone: string, password: string, confirmPassword: string){
    this.UserService.register(new Users(id,firstName, lastName, email, phone, password,confirmPassword)).subscribe((response: any) => {
      console.log(response);
      if (response.status) {
        alert("regestered succefully")
      } else {
        this.errors = response.message;
      }
    });
  }

}

