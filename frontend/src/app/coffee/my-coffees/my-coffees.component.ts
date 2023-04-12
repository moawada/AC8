import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICoffeeInfo } from 'src/app/models/coffee.models';
import { CoffeeDataService } from 'src/app/services/data/coffee-data.service';

@Component({
  selector: 'app-my-coffees',
  templateUrl: './my-coffees.component.html',
  styleUrls: ['./my-coffees.component.scss']
})
export class MyCoffeesComponent implements OnInit {

  deletionMessage: string;
  coffee: ICoffeeInfo;

  myCoffees: ICoffeeInfo[] = []

  constructor (
    private coffeeService: CoffeeDataService,
    private router: Router
  ) {}

  ngOnInit() {
    this.refreshCoffees();
  }

  refreshCoffees() {
    this.coffeeService.retrieveAllCoffees('moe').subscribe(    
      response => {
        this.myCoffees = response;
      }
    );
  }
  
  addCoffee(){
    this.router.navigate(['coffees/my-coffees', -1]);      
  }

  deleteCoffee(id: number) {
    this.coffeeService.deleteCoffee('moe', id).subscribe(
      response => {
        this.deletionMessage = `Deletion of Coffee ${id} is successful`;
        this.refreshCoffees();
      }
    )
  }

  updateCoffees(id: number) {
    this.router.navigate(['coffees/my-coffees', id]);
  }
}
