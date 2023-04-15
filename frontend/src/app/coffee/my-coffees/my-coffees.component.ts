import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICoffeeInfo } from 'src/app/models/coffee.models';
import { JwtAuthenticationService } from 'src/app/services/jwt-authentication.service';
import { CoffeeDataService } from 'src/app/services/data/coffee-data.service';

@Component({
  selector: 'app-my-coffees',
  templateUrl: './my-coffees.component.html',
  styleUrls: ['./my-coffees.component.scss']
})
export class MyCoffeesComponent implements OnInit {

  username: any;
  deletionMessage: string;
  coffee: ICoffeeInfo;

  myCoffees: ICoffeeInfo[] = []

  constructor (
    private coffeeService: CoffeeDataService,
    private router: Router,
    private jwtAuthService: JwtAuthenticationService
  ) {}

  ngOnInit() {
    this.getUsername();
    this.refreshCoffees();
  }

  getUsername(){
    this.username = this.jwtAuthService.getAuthenticatedUser();
      return this.username;
  }


  refreshCoffees() {
    this.coffeeService.retrieveMyCoffees(this.username).subscribe(    
      response => {
        this.myCoffees = response;
      }
    );
  }
  
  addCoffee(username: string){
    this.router.navigate([username, 'coffees','my-coffees', -1]);      
  }

  deleteCoffee(id: number) {
    this.coffeeService.deleteCoffee(this.username, id).subscribe(
      response => {
        this.deletionMessage = `Deletion of Coffee ${id} is successful`;
        this.refreshCoffees();
      }
    )
  }

  updateCoffees(username: string, id: number) {
    this.router.navigate([username, 'coffees', 'my-coffees', id]);
  }
}
