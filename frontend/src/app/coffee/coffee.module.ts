import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoffeeRoutingModule } from './coffee-routing.module';
import { CoffeeComponent } from './coffee.component';
import { MaterialExampleModule } from '../material.module';
import { StoreModule } from '@ngrx/store';
import * as coffeeReducers from '../store/reducers/coffee-list.reducer';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { CoffeeDetailsComponent } from './coffee-details/coffee-details.component';


@NgModule({
  declarations: [
    CoffeeComponent,
    CoffeeDetailsComponent
  ],
  imports: [
    CommonModule,
    CoffeeRoutingModule,
    MatPaginatorModule,
    MatTableModule,
    MaterialExampleModule,
    StoreModule.forFeature(coffeeReducers.featureKey, coffeeReducers.coffeeReducer)
  ]
})
export class CoffeeModule { }
