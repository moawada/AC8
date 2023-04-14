import { Component } from '@angular/core';
import { WelcomeDataService } from '../services/data/welcome-data.service';
import { BasicAuthenticationService } from '../services/basic-authentication.service';
import { Observable, map } from 'rxjs';

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
    private basicAuthService: BasicAuthenticationService
  ) {  }

  ngOnInit() {
   this.getUserName();  
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

  getWelcomeMessageWithParameter(username: string) {
    this.welcomeService.executeHelloWorldBeanServiceWithPathVariable(username)
      .subscribe(
        {
          next: this.handleSuccessfulResponse.bind(this),
          error: this.handleErrorResponse.bind(this)
        }
    )
  }

  getUserName(){
    const username = this.basicAuthService.getAuthenticatedUser();
  }

  // getUserName(): Observable<string> {
  //   return this.basicAuthService.executeAuthegetnticationService(this.username)
  //     .pipe(
  //       map(data => data.username)
  //     );
  // }

}
