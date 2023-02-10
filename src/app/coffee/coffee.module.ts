import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoffeeRoutingModule } from './coffee-routing.module';
import { CoffeeComponent } from './coffee.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { CoffeeListModule } from './coffee-list/coffee-list.module';
import { CoffeeDetailsModule } from './coffee-details/coffee-details.module';
import { MaterialExampleModule } from '../material.modulet';


@NgModule({
  declarations: [
    CoffeeComponent,
    SidenavComponent,
  ],
  imports: [
    CommonModule,
    CoffeeRoutingModule,
    CoffeeListModule,
    CoffeeDetailsModule,
    MaterialExampleModule,
  ]
})
export class CoffeeModule { }
