import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoffeeListRoutingModule } from './coffee-list-routing.module';
import { CoffeeListComponent } from './coffee-list.component';


@NgModule({
  declarations: [
    CoffeeListComponent
  ],
  imports: [
    CommonModule,
    CoffeeListRoutingModule,
  ],
  exports: [
    CoffeeListComponent
  ]
})
export class CoffeeListModule { }
