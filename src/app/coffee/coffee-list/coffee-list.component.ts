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

  public columnsToDisplay = ['blend_name', 'origin', 'variety'];
  public  showFiller = false;

  constructor(
    private coffeeService: CoffeeService,
    cdRef: ChangeDetectorRef,
    private store: Store<coffeeSelectors.AppState>,
    ) {};

  ngOnInit() {
    this.coffees$ = this.store.select(coffeeSelectors.selectCoffees);
    if (this.store.select(coffeeSelectors.countFetchedCoffees).subscribe((count) => {
      count < 50}))
      {
      this.coffees$.subscribe((coffees) => {
        this.dataSource.data = coffees;
      })};
    this.showCoffees();

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  showCoffees() {
    const nCoffee = 50;
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
