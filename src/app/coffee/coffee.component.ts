import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { ICoffeeInfo } from 'src/app/models/coffee.models';
import * as coffeesActions from '../store/actions/coffee-list.actions';
import * as coffeeSelectors from '../store/selectors/selector';


@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.scss']
})


export class CoffeeComponent implements OnInit, AfterViewInit {

  private ngUnsubscribe = new Subject<void>();
  public coffees$: Observable<ICoffeeInfo[]>;
  public selectedCoffee: ICoffeeInfo;

  dataSource = new MatTableDataSource<ICoffeeInfo>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  public columnsToDisplay = ['blend_name'];
  public  showFiller = false;

  constructor(
    private store: Store<coffeeSelectors.AppState>,
    ) {};

  ngOnInit() {
    this.coffees$ = this.store.select(coffeeSelectors.selectCoffees);
    this.coffees$.subscribe((coffees) => {
      this.dataSource.data = coffees;
      if (!coffees.length){
        this.store.dispatch(coffeesActions.get_coffees());
      }
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
