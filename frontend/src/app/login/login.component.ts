import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtAuthenticationService } from '../services/jwt-authentication.service';


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
    private jwtAuthService: JwtAuthenticationService
  ) { }

  ngOnInit() {
    this.isUserLoggedIn = this.jwtAuthService.isUserLoggedIn();
  }

  handleJWTAuthLogin() {
    this.jwtAuthService.executeJWTAuthenticationService(this.username, this.password)
      .subscribe({
        next: (data) => {
          this.router.navigate(['home' , this.username]);
          this.invalidLogIn = false;        
        },
        error: (error) => {
          this.invalidLogIn = false;        
        }
      });
  }

}
