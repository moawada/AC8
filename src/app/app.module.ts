import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExampleModule } from './material.modulet';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialExampleModule
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
