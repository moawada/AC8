import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ICoffeeInfo } from 'src/app/models/coffee.models';
import * as coffeeReducers from "../reducers/coffee-list.reducer";

export interface AppState {
  coffeesSliceState: coffeeReducers.CoffeesState;
}

export const selectCoffeesSliceState =
  createFeatureSelector<coffeeReducers.CoffeesState>(coffeeReducers.featureKey);

export const selectCoffees =
  createSelector(
    selectCoffeesSliceState,
    (state: coffeeReducers.CoffeesState) => state.coffees
  );

export const getItemById = (id: number) => createSelector(
  selectCoffees, (allCoffees: Array<ICoffeeInfo>) : ICoffeeInfo | undefined => {
    if (allCoffees) {
      return allCoffees.find(coffee => {
        return coffee.id === id;
      });
    } else {
      return undefined;
    }
  });

export const getCoffeesByPage = (pageNumber: number) => createSelector(
  selectCoffees, (allCoffees: Array<ICoffeeInfo>) : Array<ICoffeeInfo> => {
      return allCoffees.slice((0 + pageNumber * 10), (9 + pageNumber * 10))
    }
  );