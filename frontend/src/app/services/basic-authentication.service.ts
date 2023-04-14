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
export class BasicAuthenticationService {

  constructor(
    private http: HttpClient
  ) { }

  executeAuthenticationService(username: string, password: string){
    // let basicAuthHeaderString = 'Basic ' + window.btoa(`${username}:${password}`);
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString  
    });

    return this.http.get<AuthenticationBean>(
      `${API_URL}/basicauth`, 
      {headers}).pipe( //pipe methods declares what happens if req success || fails
        map(
          data => {
            sessionStorage.setItem(AUTHENTICATED_USER, username);
            sessionStorage.setItem(TOKEN, basicAuthHeaderString);
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
