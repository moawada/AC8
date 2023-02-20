import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoffeeListComponent } from './coffee-list.component';
import { CoffeeRoutingModule } from '../coffee-routing.module';
import { MatTableModule } from '@angular/material/table';
import { CoffeeDetailsModule } from "./coffee-details/coffee-details.module";
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
    declarations: [
        CoffeeListComponent,
    ],
    exports: [
        CoffeeListComponent
    ],
    imports: [
        CommonModule,
        CoffeeRoutingModule,
        MatTableModule,
        MatPaginatorModule,
        CoffeeDetailsModule
    ]
})
export class CoffeeListModule { }
