import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoffeeDetailsComponent } from './coffee-details.component';
import { CoffeeRoutingModule } from '../../coffee-routing.module';
import { MaterialExampleModule } from 'src/app/material.modulet';


@NgModule({
  declarations: [
    CoffeeDetailsComponent
  ],
  imports: [
    CommonModule,
    CoffeeRoutingModule,
    MaterialExampleModule,
  ],
  exports: [
    CoffeeDetailsComponent
  ]
})
export class CoffeeDetailsModule { }
