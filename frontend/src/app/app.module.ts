import { CUSTOM_ELEMENTS_SCHEMA, NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExampleModule } from './material.module';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { HeaderComponent } from './header/header.component';
import { EffectsModule } from '@ngrx/effects';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CoffeeListEffects } from './store/effects/coffee-list.effects';
import { FormsModule } from '@angular/forms';
// import { AuthenticationService } from './services/authentication.service';
import { MyCoffeesComponent } from './coffee/my-coffees/my-coffees.component';
import { LoginModule } from './login/login.module';
import { LogoutModule } from './logout/logout.module';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HttpInterceptorBasicAuthService } from './services/http/http-interceptor-basic-auth.service';
import { BasicAuthenticationService } from './services/basic-authentication.service';


@NgModule({
  declarations: [	
    AppComponent,
    HeaderComponent,
    MyCoffeesComponent,
    HomeComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    MaterialExampleModule,
    FormsModule,
    LoginModule,
    LogoutModule,
    EffectsModule.forRoot([CoffeeListEffects]),
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument(),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],

  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],

  providers:[
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {appearance: 'fill'}
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorBasicAuthService,
      multi: true
    },
      BasicAuthenticationService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
