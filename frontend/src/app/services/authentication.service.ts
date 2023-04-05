import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private username = new BehaviorSubject<string>('');

  constructor() { }

  authenticate(username: string, password: string) {
    if(username ==="a" && password ==="1") {
      sessionStorage.setItem('authenticaterUser', username);
      return true;
    } 
    else {
      return false;
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticaterUser');
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem('authenticaterUser');
  }

  getUserName() {
    return this.username.asObservable();
  }

  setUsername(name: string) {
    this.username.next(name);
  }

}
