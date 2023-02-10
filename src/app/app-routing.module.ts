import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomeModule)
  },
  {
    path: 'coffee',
    loadChildren: () =>
      import('./coffee/coffee.module').then(m => m.CoffeeModule)
  },
  // {
  //   path: 'coffee-list',
  //   loadChildren: () =>
  //     import('./coffee/coffee-list/coffee-list.module').then(m => m.CoffeeListModule)
  // },
  // { path: 'coffee-details',
  //   loadChildren: () =>
  //     import('./coffee/coffee-details/coffee-details.module').then(m => m.CoffeeDetailsModule)
  // },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
