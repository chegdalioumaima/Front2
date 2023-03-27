import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user-service.service';

@Component({
  selector: 'app-verif-page',
  templateUrl: './verif-page.component.html',
  styleUrls: ['./verif-page.component.scss']
})
export class VerifyPageComponent implements OnInit {

  constructor(private UserService: UserService) {
  }

  ngOnInit(): void {
  }

  verify(code: string, email: string): void {

    this.UserService.verify(code, email).subscribe((response: any) => {
      console.log(response);
      if (response) {
        alert("Verification successful");
      } else {
        alert("Verification failed");
      }
    });
  }
}
