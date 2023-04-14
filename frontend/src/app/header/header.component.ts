import { Component, OnInit } from '@angular/core';
import { BasicAuthenticationService } from '../services/basic-authentication.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  username: any;

  constructor (
    public basicAuthService: BasicAuthenticationService
  ) { }

  ngOnInit() {
    this.getUsername();
  }

  getUsername(){
    this.username = this.basicAuthService.getAuthenticatedUser();
      return this.username;
  }

  title = 'Coffeelatey';
}
