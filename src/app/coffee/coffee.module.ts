import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoffeeRoutingModule } from './coffee-routing.module';
import { CoffeeComponent } from './coffee.component';


@NgModule({
  declarations: [
    CoffeeComponent
  ],
  imports: [
    CommonModule,
    CoffeeRoutingModule
  ]
})
export class CoffeeModule { }
