import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICoffeeInfo } from 'src/app/models/coffee.models';

@Injectable({
  providedIn: 'root'
})
export class CoffeeDataService {

  constructor(
    private http: HttpClient
  ) { }

  retrieveAllCoffees(username: string){
    return this.http.get<ICoffeeInfo[]>(`http://localhost:8080/users/${username}/my-coffees`);
    // console.log("Execute Retrieve All Coffees Service");
  }

  retrieveCoffee(username: string, id: number) {
    return this.http.get<ICoffeeInfo>(`http://localhost:8080/users/${username}/my-coffees/${id}`);
  }

  deleteCoffee(username: string, id: number) {
    return this.http.delete(`http://localhost:8080/users/${username}/my-coffees/${id}`);
  }

  updateCoffee(username: string, id: number, coffee: ICoffeeInfo) {
    return this.http.put<ICoffeeInfo>(`http://localhost:8080/users/${username}/my-coffees/${id}`, coffee);
  }

  createCoffee(username: string, coffee: ICoffeeInfo) {
    return this.http.post<ICoffeeInfo>(`http://localhost:8080/users/${username}/my-coffees`, coffee);
  }

}
