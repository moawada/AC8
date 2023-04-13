import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';


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
    private userService: AuthenticationService
  ) { }

  ngOnInit() {
    this.isUserLoggedIn = this.userService.isUserLoggedIn();
  }

  handleLogin() {
    console.log("username: ", this.username);
    console.log("password: ", this.password);
    if(this.userService.authenticate(this.username, this.password)) {
      this.invalidLogIn = false;
      this.userService.setUsername(this.username);
      this.router.navigate([this.username, 'home']);
    } else {
      this.invalidLogIn = true;
    }
  }
}
