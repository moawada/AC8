import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  username: string;

  constructor (
    public authService: AuthenticationService
  ) { }

  ngOnInit() {
    this.authService.getUserName().subscribe((username) => {
      this.username = username;
    })
  }

  title = 'Coffeelatey';
}
