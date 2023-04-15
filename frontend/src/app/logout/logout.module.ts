import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoutComponent } from './logout.component';
import { MaterialExampleModule } from '../material.module';
import { JwtAuthenticationService } from '../services/jwt-authentication.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialExampleModule
  ],
  declarations: [
    LogoutComponent
  ],
  providers: [
    JwtAuthenticationService
  ]
})
export class LogoutModule { }
