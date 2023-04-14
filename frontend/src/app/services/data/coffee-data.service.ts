import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/app.constants';
import { ICoffeeInfo } from 'src/app/models/coffee.models';

@Injectable({
  providedIn: 'root'
})
export class CoffeeDataService {

  constructor(
    private http: HttpClient
  ) { }

  retrieveAllCoffees(username: string){
    return this.http.get<ICoffeeInfo[]>(`${API_URL}/users/${username}/coffees`);
    // console.log("Execute Retrieve All Coffees Service");
  }

  retrieveMyCoffees(username: string){
    return this.http.get<ICoffeeInfo[]>(`${API_URL}/users/${username}/coffees/my-coffees`);
    // console.log("Execute Retrieve All My Coffees Service");
  }

  retrieveCoffee(username: string, id: number) {
    return this.http.get<ICoffeeInfo>(`${API_URL}/users/${username}/coffees/my-coffees/${id}`);
  }

  deleteCoffee(username: string, id: number) {
    return this.http.delete(`${API_URL}/users/${username}/coffees/my-coffees/${id}`);
  }

  updateCoffee(username: string, id: number, coffee: ICoffeeInfo) {
    return this.http.put<ICoffeeInfo>(`${API_URL}/users/${username}/coffees/my-coffees/${id}`, coffee);
  }

  createCoffee(username: string, coffee: ICoffeeInfo) {
    return this.http.post<ICoffeeInfo>(`${API_URL}/${username}/coffees/my-coffees`, coffee);
  }

}
