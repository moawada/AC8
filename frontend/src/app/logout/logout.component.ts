import { Component, OnInit } from '@angular/core';
import { JwtAuthenticationService } from '../services/jwt-authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(
    private jwtAuthService : JwtAuthenticationService
  ) { }

  ngOnInit() {
    this.jwtAuthService.logout();
  }

}
