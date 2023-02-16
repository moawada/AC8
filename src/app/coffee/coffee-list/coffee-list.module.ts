import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoffeeListComponent } from './coffee-list.component';
import { CoffeeRoutingModule } from '../coffee-routing.module';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    CoffeeListComponent,
  ],
  imports: [
    CommonModule,
    CoffeeRoutingModule,
    MatTableModule,
  ],
  exports: [
    CoffeeListComponent
  ]
})
export class CoffeeListModule { }
