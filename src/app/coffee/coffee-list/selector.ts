import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as coffeeReducers from "./coffee-list.reducer";

export interface AppState {
  coffeesSliceState: coffeeReducers.CoffeesState;
}

export const selectCoffeesSliceState =
  createFeatureSelector<coffeeReducers.CoffeesState>(coffeeReducers.featureKey);

export const selectCoffees = createSelector(
  selectCoffeesSliceState,
  (state: coffeeReducers.CoffeesState) => state.coffees
);