import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './services/route-guard.service';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: ':name/home',
    component: HomeComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: ':name/coffees',
    loadChildren: () =>
      import('./coffee/coffee.module').then(m => m.CoffeeModule),
      canActivate: [RouteGuardService]
  },
  {
    path: 'logout',
    component: LogoutComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: '**', component: PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
