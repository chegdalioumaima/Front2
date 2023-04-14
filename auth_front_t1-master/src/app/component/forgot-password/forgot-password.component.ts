import { Component } from '@angular/core';
import { Users } from 'src/app/model/Users';
import {UserService} from '../../services/user-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {

  myimage:string = "assets/images/forgot.png"
  omni:string = "assets/images/loginlogo1.png"
  errors!: string;
  showPopup = false;



  constructor(private UserService: UserService,private toastr:ToastrService) {
  }

  ngOnInit(): void {
  }


  check(email: string): void{
    this.UserService.check({...Users,email}).subscribe(
      (response: any) => {
        console.log(response);
        this.showPopup=true;
        this.forgot(email);
        this.toastr.info('Check your mail','Mail');
      },
      (error: string) =>{
        console.log(error);
        this.errors = error;
        this.toastr.error('Mail is empty or not found','Mail');
      }
    );
  }

  forgot(email: string): void{
    this.UserService.forgotPassword(email).subscribe((response: any)=>{
      if(response.status){
        console.log(response);
      }else {
        this.errors = response.error;
      }
    })
  }

}
