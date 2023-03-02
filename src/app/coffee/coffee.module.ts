import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoffeeRoutingModule } from './coffee-routing.module';
import { CoffeeComponent } from './coffee.component';
import { CoffeeDetailsModule } from './coffee-details/coffee-details.module';
import { MaterialExampleModule } from '../material.modulet';
import { StoreModule } from '@ngrx/store';
import * as coffeeReducers from '../store/reducers/coffee-list.reducer';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    CoffeeComponent,
  ],
  imports: [
    CommonModule,
    CoffeeRoutingModule,
    CoffeeDetailsModule,
    MatPaginatorModule,
    MatTableModule,
    MaterialExampleModule,
    StoreModule.forFeature(coffeeReducers.featureKey, coffeeReducers.coffeeReducer)
  ]
})
export class CoffeeModule { }
