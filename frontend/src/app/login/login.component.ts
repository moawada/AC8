import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../services/basic-authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  errorMessage: string='Invalid Credentials';
  isUserLoggedIn: boolean = false;
  invalidLogIn = false;

  constructor(
    private router: Router,
    private basicAuthService: BasicAuthenticationService
  ) { }

  ngOnInit() {
    // this.isUserLoggedIn = this.basicAuthService.isUserLoggedIn();
  }

  handleBasicAuthLogin() {
    this.basicAuthService.executeAuthenticationService(this.username, this.password)
      .subscribe({
        next: (data) => {
          console.log("data:", data);
          this.router.navigate([this.username, 'home']);
          this.invalidLogIn = false;        
        },
        error: (error) => {
          console.log(error);
          this.invalidLogIn = false;        
        }
      });
  }
  
}
