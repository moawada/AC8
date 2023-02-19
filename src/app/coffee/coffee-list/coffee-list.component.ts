import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject, takeUntil } from 'rxjs';
import { ICoffeeInfo } from 'src/app/models/coffee.models';
import { CoffeeService } from 'src/app/services/coffee.service';
import { __values } from 'tslib';
import * as coffeesActions from '../../store/actions/coffee-list.actions';
import * as coffeeSelectors from '../../store/selectors/selector';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.scss']
})
export class CoffeeListComponent implements OnInit {

  private ngUnsubscribe = new Subject<void>();
  public coffees$: Observable<ICoffeeInfo[]>;

  public columnsToDisplay = ['id', 'uid', 'blend_name', 'origin', 'variety', 'notes', 'intensifier'];

  constructor(
    private coffeeService: CoffeeService,
    cdRef: ChangeDetectorRef,
    private store: Store<coffeeSelectors.AppState>
    ) {};

  ngOnInit() {
    this.coffees$ = this.store.select(coffeeSelectors.selectCoffees);
    this.showCoffees();
  }

  showCoffees() {
    const nCoffee = 10;
    for (let i = 0; i < nCoffee; i++){
      this.coffeeService.getCoffee()
      .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe((data: ICoffeeInfo) => {
          this.store.dispatch(coffeesActions.add_coffee({coffee: data}));
      });
    }
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
