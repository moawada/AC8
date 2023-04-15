import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtAuthenticationService } from '../jwt-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor{

  constructor(
    private jwtAuthService: JwtAuthenticationService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler){
    let jwtAuthHeaderString = this.jwtAuthService.getAuthenticationToken();
    let username = this.jwtAuthService.getAuthenticatedUser(); 
    
    if (jwtAuthHeaderString && username ) {
      request = request.clone({
        setHeaders : {
          Authorization: jwtAuthHeaderString
        }
      })
    }
    return next.handle(request);
  }

}
