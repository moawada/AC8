import { Component, OnInit } from '@angular/core';
import { JwtAuthenticationService } from '../services/jwt-authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  username: any;

  constructor (
    public jwtAuthService: JwtAuthenticationService
  ) { }

  ngOnInit() {
    this.getUsername();
  }

  getUsername(){
    this.username = this.jwtAuthService.getAuthenticatedUser();
      return this.username;
  }

  title = 'Coffeelatey';
}
