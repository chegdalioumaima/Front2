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
  //myform!: FormGroup


    
  constructor(private UserService: UserService, private fb:FormBuilder) {
    /*this.myform=this.fb.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',Validators.required],
      phone:['',Validators.required],
      password:['',Validators.required],
      confirmPassword:['',Validators.required],
    })*/
    
    

  }
  

  

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

