import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  
  username: string;
  message= 'some welcome message';

  constructor(
    private route: ActivatedRoute,
    private userService: AuthenticationService
  ) {  }

  ngOnInit() {
    this.userService.getUserName().subscribe((username) => {
      this.username = username;
    })
  }
}
