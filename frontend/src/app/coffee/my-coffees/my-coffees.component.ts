import { Component, OnInit } from '@angular/core';
import { ICoffeeInfo } from 'src/app/models/coffee.models';

@Component({
  selector: 'app-my-coffees',
  templateUrl: './my-coffees.component.html',
  styleUrls: ['./my-coffees.component.scss']
})
export class MyCoffeesComponent implements OnInit {

  myCoffees: ICoffeeInfo[] = [
    {
      id: 13063,
      uid: '3fdcf88ac52b1324',
      blendName: 'House Blend',
      origin: 'Kenya',
      variety: 'Arabica',
      notes: 'Floral',
      intensifier: 'Extra Strong',
    },
    {
      id: 29814,
      uid: '3fbc019cdda56870',
      blendName: 'Espresso',
      origin: 'Colombia',
      variety: 'Robusta',
      notes: 'Chocolate',
      intensifier: 'Strong'
    }
  ]

  constructor () {}

  ngOnInit() {}

}
