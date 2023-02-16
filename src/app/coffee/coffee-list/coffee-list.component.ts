import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject, takeUntil } from 'rxjs';
// import { AppState } from 'src/app/models/app-state.models';
import { ICoffeeInfo } from 'src/app/models/coffee.models';
import { CoffeeService } from 'src/app/services/coffee.service';
import * as coffeesActions from './coffee-list.actions';
import * as coffeeSelectors from './selector';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.scss']
})
export class CoffeeListComponent implements OnInit {

  private ngUnsubscribe = new Subject<void>();
  coffees$: Observable<ICoffeeInfo[]>;

  columnsToDisplay = ['id', 'uid', 'blend_name', 'origin', 'variety', 'notes', 'intensifier'];

  constructor(
    private coffeeService: CoffeeService,
    cdRef: ChangeDetectorRef,
    private store: Store<coffeeSelectors.AppState>
    ) {};
    //

  showCoffees() {
    const nCoffee = 10;
    for (let i = 0; i < nCoffee; i++){
      this.coffeeService.getCoffee()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((data: ICoffeeInfo) => {
        this.store.dispatch(coffeesActions.ADD_COFFEE({coffee: data}));
        console.log(this.coffees$);
        this.coffees$ = this.store.select(coffeeSelectors.selectCoffees);
      });
    }
  }

  coffeeData: Observable<Array<ICoffeeInfo>>;

  ngOnInit() {
    this.coffees$ = this.store.select(coffeeSelectors.selectCoffees);
    this.showCoffees();
    //this.coffeeData = this.store.select(store => store.coffeeList);
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
