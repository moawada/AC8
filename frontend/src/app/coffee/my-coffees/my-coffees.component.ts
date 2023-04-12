import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { ICoffeeInfo } from 'src/app/models/coffee.models';
import { CoffeeDataService } from 'src/app/services/data/coffee-data.service';
import { WelcomeDataService } from 'src/app/services/data/welcome-data.service';

@Component({
  selector: 'app-my-coffees',
  templateUrl: './my-coffees.component.html',
  styleUrls: ['./my-coffees.component.scss']
})
export class MyCoffeesComponent implements OnInit {

  welcomeMessageFromService : string;
  name: string;
  deletionMessage: string;
  coffee: ICoffeeInfo;

  myCoffees: ICoffeeInfo[] = []

  constructor (
    private service: WelcomeDataService,
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

  handleSuccessfulResponse(response: any) {
    this.welcomeMessageFromService = response.message;
  }

  handleErrorResponse(error: any) {
    this.welcomeMessageFromService = error.error.message;
  }

  getWelcomeMessage() {
    this.service.executeHelloWorldBeanService()
      .subscribe(
        {
          next: this.handleSuccessfulResponse.bind(this),
          error: this.handleErrorResponse.bind(this)
        }
    )
  }

  getWelcomeMessageWithParameter() {
    this.service.executeHelloWorldBeanServiceWithPathVariable(this.name)
      .subscribe(
        {
          next: this.handleSuccessfulResponse.bind(this),
          error: this.handleErrorResponse.bind(this)
        }
    )
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
