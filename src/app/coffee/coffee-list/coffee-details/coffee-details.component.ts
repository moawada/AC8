import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ICoffeeInfo } from 'src/app/models/coffee.models';
import * as coffeeSelectors from 'src/app/store/selectors/selector';


@Component({
  selector: 'app-coffee-details',
  templateUrl: './coffee-details.component.html',
  styleUrls: ['./coffee-details.component.scss']
})


export class CoffeeDetailsComponent implements OnInit {

  public columnsToDisplay = ['id', 'uid', 'blend_name', 'origin', 'variety', 'notes', 'intensifier'];

  @Input() selectedCoffee : ICoffeeInfo;

  constructor(
    private route: ActivatedRoute,
    private store: Store<coffeeSelectors.AppState>
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe( paramMap => {
      let id = parseInt(paramMap.get("id") || "");
      this.store.select(coffeeSelectors.getItemById(id))
        .subscribe((item) => {
          if (item) {
            this.selectedCoffee = item;
          }
        });
    });
    // console.log("this.selectedCoffees in child", this.selectedCoffee);
  }
}
