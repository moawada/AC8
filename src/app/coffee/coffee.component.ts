import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatDrawer } from '@angular/material/sidenav';
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
  public selectedCoffeeId: number;
  public columnsToDisplay = ['blend_name'];


  public dataSource = new MatTableDataSource<ICoffeeInfo>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatDrawer) matDrawer: MatDrawer;


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

  showSelectedCoffee(coffeeId: number) {
    this.selectedCoffeeId = coffeeId;
    this.matDrawer.toggle();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
