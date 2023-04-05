import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoutComponent } from './logout.component';
import { AuthenticationService } from '../services/authentication.service';
import { MaterialExampleModule } from '../material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialExampleModule
  ],
  declarations: [
    LogoutComponent
  ],
  providers: [
    AuthenticationService
  ]
})
export class LogoutModule { }
