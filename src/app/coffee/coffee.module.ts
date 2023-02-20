import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoffeeRoutingModule } from './coffee-routing.module';
import { CoffeeComponent } from './coffee.component';
import { CoffeeListModule } from './coffee-list/coffee-list.module';
import { CoffeeDetailsModule } from './coffee-list/coffee-details/coffee-details.module';
import { MaterialExampleModule } from '../material.modulet';
import { StoreModule } from '@ngrx/store';
import * as coffeeReducers from '../store/reducers/coffee-list.reducer';


@NgModule({
  declarations: [
    CoffeeComponent,
  ],
  imports: [
    CommonModule,
    CoffeeRoutingModule,
    CoffeeListModule,
    CoffeeDetailsModule,
    MaterialExampleModule,
    StoreModule.forFeature(coffeeReducers.featureKey, coffeeReducers.coffeeReducer)
  ]
})
export class CoffeeModule { }
