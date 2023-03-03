import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ICoffeeInfo } from 'src/app/models/coffee.models';
import * as coffeeSelectors from 'src/app/store/selectors/selector';


@Component({
  selector: 'app-coffee-details',
  templateUrl: './coffee-details.component.html',
  styleUrls: ['./coffee-details.component.scss']
})


export class CoffeeDetailsComponent implements OnInit {

  public columnsToDisplay = ['id', 'uid', 'blend_name', 'origin', 'variety', 'notes', 'intensifier'];
  public selectedCoffee : ICoffeeInfo;


  @Input() set selectedCoffeeId(idVal: number) {
    this.setCoffeeDetails(idVal);
  }

  constructor(
    private store: Store<coffeeSelectors.AppState>
  ) {}

  ngOnInit() {}

  setCoffeeDetails(id: number) {
    if (id) {
      this.store.select(coffeeSelectors.getItemById(id))
      .subscribe((item) => {
        if (item) {
          this.selectedCoffee = item;
        }
      })
    }
  }
  }
