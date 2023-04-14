import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoutComponent } from './logout.component';
// import { AuthenticationService } from '../services/authentication.service';
import { MaterialExampleModule } from '../material.module';
import { BasicAuthenticationService } from '../services/basic-authentication.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialExampleModule
  ],
  declarations: [
    LogoutComponent
  ],
  providers: [
    // AuthenticationService,
    BasicAuthenticationService
  ]
})
export class LogoutModule { }
