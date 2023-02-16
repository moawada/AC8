import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExampleModule } from './material.modulet';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { HeaderComponent } from './header/header.component';
import { EffectsModule } from '@ngrx/effects';
import { reducers, metaReducers } from './reducers';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { coffeeReducer } from './coffee/coffee-list/coffee-list.reducer';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialExampleModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot({}),

    //StoreModule.forRoot({}, {}),
    /*StoreModule.forRoot(reducers, {
      metaReducers
    }),*/
    // StoreModule.forRoot({
    //   coffeeList: coffeeReducer
    // }),
  ],

  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],

  providers:[
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {appearance: 'fill'}
    }
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
