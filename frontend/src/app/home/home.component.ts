import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { WelcomeDataService } from '../services/data/welcome-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  
  welcomeMessageFromService : string;
  username: string;
  name: string;

  constructor(
    private welcomeService: WelcomeDataService,
    private userService: AuthenticationService,
  ) {  }

  ngOnInit() {
    this.userService.getUserName().subscribe((username) => {
      this.username = username;
    })
  }

  handleSuccessfulResponse(response: any) {
    this.welcomeMessageFromService = response.message;
  }

  handleErrorResponse(error: any) {
    this.welcomeMessageFromService = error.error.message;
  }

  getWelcomeMessage() {
    this.welcomeService.executeHelloWorldBeanService()
      .subscribe(
        {
          next: this.handleSuccessfulResponse.bind(this),
          error: this.handleErrorResponse.bind(this)
        }
    )
  }

  getWelcomeMessageWithParameter() {
  this.welcomeService.executeHelloWorldBeanServiceWithPathVariable(this.username)
    .subscribe(
      {
        next: this.handleSuccessfulResponse.bind(this),
        error: this.handleErrorResponse.bind(this)
      }
  )
  }

}
