import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { JwtAuthenticationService } from './jwt-authentication.service';


@Injectable({
  providedIn: 'root'
})
export class RouteGuardService  {

  constructor(
    private jwtAuthService: JwtAuthenticationService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(this.jwtAuthService.isUserLoggedIn()){
      return true;
    }
    else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
