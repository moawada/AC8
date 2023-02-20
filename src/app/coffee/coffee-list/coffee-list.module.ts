import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoffeeListComponent } from './coffee-list.component';
import { CoffeeRoutingModule } from '../coffee-routing.module';
import { MatTableModule } from '@angular/material/table';
import { CoffeeDetailsModule } from "./coffee-details/coffee-details.module";
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';

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
        MatSidenavModule,
        CoffeeDetailsModule
    ]
})
export class CoffeeListModule { }
