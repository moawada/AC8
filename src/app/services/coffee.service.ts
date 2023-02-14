import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  constructor( private http: HttpClient) {}

  coffeAPI = 'https://random-data-api.com/api/coffee/random_coffee'

  getAllCoffees() {
    return this.http.get(this.coffeAPI);
}
}
