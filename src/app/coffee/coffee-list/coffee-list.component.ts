import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { IconOptions } from '@angular/material/icon';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { select, Store } from '@ngrx/store';
import { Observable, Subject, takeUntil } from 'rxjs';
import { ICoffeeInfo } from 'src/app/models/coffee.models';
import { CoffeeService } from 'src/app/services/coffee.service';
import * as coffeesActions from '../../store/actions/coffee-list.actions';
import * as coffeeSelectors from '../../store/selectors/selector';


@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.scss']
})


export class CoffeeListComponent implements OnInit, AfterViewInit {

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
      if (coffees.length < 50){
        this.store.dispatch(coffeesActions.get_coffee());
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
