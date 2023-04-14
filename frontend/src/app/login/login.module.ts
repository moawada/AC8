import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { MaterialExampleModule } from '../material.module';
// import { AuthenticationService } from '../services/authentication.service';
import { BasicAuthenticationService } from '../services/basic-authentication.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialExampleModule
  ],
  declarations: [
    LoginComponent
  ],
  providers: [
    // AuthenticationService,
    BasicAuthenticationService
  ]
})

export class LoginModule { }


