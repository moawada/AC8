import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoffeeComponent } from './coffee.component';
import { MyCoffeesComponent } from './my-coffees/my-coffees.component';


const routes: Routes = [
  {
    path: '',
    component: CoffeeComponent,
  },
  {
    path: 'my-coffees',
    component: MyCoffeesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoffeeRoutingModule { }
