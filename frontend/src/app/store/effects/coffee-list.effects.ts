import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { CoffeeService } from 'src/app/services/coffee.service';
import * as coffeeActions from '../actions/coffee-list.actions'

@Injectable()
export class CoffeeListEffects {

  constructor(
    private actions$ : Actions,
    private coffeeService: CoffeeService
  ) {}

  loadCoffee$ = createEffect (() =>
    this.actions$.pipe(ofType(coffeeActions.get_coffees),
    mergeMap(() => this.coffeeService.getCoffee()
      .pipe(map(coffees => coffeeActions.get_coffees_success({coffees})),
        catchError(error => of(coffeeActions.get_coffees_failure({payload: error})))
      ))
    )
  )
}
