import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {  map } from 'rxjs';
import { API_URL } from '../app.constants';

export const TOKEN = 'AuthenticationToken';
export const AUTHENTICATED_USER = 'authenticatedUser';

@Injectable({
  providedIn: 'root'
})
export class JwtAuthenticationService {

  constructor(
    private http: HttpClient
  ) { }

  executeJWTAuthenticationService(username: string, password: string){
    //Start with POST request to retrieve auth TOKEN
    return this.http.post<any>(
      `${API_URL}/authenticate`, {
        username,
        password
      }).pipe( //pipe methods declares what happens if req success || fails
        map(
          data => {
            sessionStorage.setItem(AUTHENTICATED_USER, username);
            sessionStorage.setItem(TOKEN, `Bearer ${data.token}`); //Store Token in bearer string
            return data;
          }
        )
      );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER);
  }

  getAuthenticationToken() {
    if (this.getAuthenticatedUser()){
      return sessionStorage.getItem(TOKEN);
    }
    else {
      return null
    } 
  }
}

export class AuthenticationBean {
  constructor(
    public message: string
  ) {}
}
