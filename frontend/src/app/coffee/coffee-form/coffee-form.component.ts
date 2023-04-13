import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ICoffeeInfo } from 'src/app/models/coffee.models';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CoffeeDataService } from 'src/app/services/data/coffee-data.service';

@Component({
  selector: 'app-coffee-form',
  templateUrl: './coffee-form.component.html',
  styleUrls: ['./coffee-form.component.scss']
})
export class CoffeeFormComponent implements OnInit {

  username: string;
  id: number;
  coffee: ICoffeeInfo;
  coffeeForm: FormGroup;
  intensifiers: string[] = ['Mild', 'Medium', 'Strong'];

  constructor(
    private coffeeService: CoffeeDataService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthenticationService
  ) { }

  ngOnInit() {
    this.getUserName();
    this.id = this.route.snapshot.params['id'];
    this.initForm(); //Mock values in object to avoid console errors at compile time

    //If it not a new coffeem retrieve & subscribe. 
    if (this.id != -1){ 
      this.coffeeService.retrieveCoffee('moe', this.id)
        .subscribe(
          coffeeData => this.coffee = coffeeData
        )
    }
  }

  getUserName(){
    this.authService.getUserName().subscribe((username) => {
      this.username = username;
    })
  }

  initForm() {
    this.coffee = {id: this.id, uid: '', blendName: '', origin: '', variety: '', notes: '', intensifier: ''};
    this.coffeeForm = new FormGroup({
      id: new FormControl(),
      uid: new FormControl(),
      blendName: new FormControl('', Validators.required),
      origin: new FormControl('', Validators.required),
      variety: new FormControl('', Validators.required),
      notes: new FormControl(),
      intensifier: new FormControl('', Validators.required),
    });
  }

  // saveCoffee(username: string){
  //   if (this.id ===1 ) { //create new coffee instance
  //     this.coffeeService.createCoffee(username, this.coffee)
  //       .subscribe(
  //         data => {
  //           this.router.navigate([username, 'coffees', 'my-coffees']);
  //         }
  //       )
  //   }
  //   else { //update existing coffee instance
  //   this.coffeeService.updateCoffee(username, this.id, this.coffee)
  //     .subscribe(
  //       data => {
  //         this.router.navigate([username, 'coffees', 'my-coffees']);
  //       }
  //     )
  //   }
  // }

  onSubmit(username: string) {
    if (this.id ===1 ) { //create new coffee instance
      this.coffeeService.createCoffee(username, this.coffee)
        .subscribe(
          data => {
            this.router.navigate([username, 'coffees', 'my-coffees']);
          }
        )
    }
    else { //update existing coffee instance
    this.coffeeService.updateCoffee(username, this.id, this.coffee)
      .subscribe(
        data => {
          this.router.navigate([username, 'coffees', 'my-coffees']);
        }
      )
    }
  }
}
