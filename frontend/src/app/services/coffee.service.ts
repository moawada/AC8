import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICoffeeInfo } from '../models/coffee.models';


@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  constructor( private http: HttpClient) {}

  coffeeAPI = 'http://localhost:8080/coffees';

  getCoffee() { //To adapt to new API
    return this.http.get<ICoffeeInfo[]>(this.coffeeAPI)
  }
}
