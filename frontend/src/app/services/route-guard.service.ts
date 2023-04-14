import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { BasicAuthenticationService } from './basic-authentication.service';


@Injectable({
  providedIn: 'root'
})
export class RouteGuardService  {

  constructor(
    private basicAuthService: BasicAuthenticationService,
    private router: Router
  ) { }

  // Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree;
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(this.basicAuthService.isUserLoggedIn()){
      return true;
    }
    else {
      this.router.navigate(['login']);
      return false;
    }
  }
  // CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree;
}
