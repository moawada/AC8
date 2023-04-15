import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { MaterialExampleModule } from '../material.module';
import { JwtAuthenticationService } from '../services/jwt-authentication.service';


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
    JwtAuthenticationService
  ]
})

export class LoginModule { }


