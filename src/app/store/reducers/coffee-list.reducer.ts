import { Action, createReducer, on } from '@ngrx/store';
import { ICoffeeInfo } from 'src/app/models/coffee.models';
import * as coffeeActions from '../actions/coffee-list.actions';


export interface CoffeesState {
    coffees: Array<ICoffeeInfo>;
};

export const initialState : CoffeesState = {
    coffees: [],
};

export const _coffeeReducer = createReducer(
    initialState,
    on(coffeeActions.get_coffees_success, (
      state, { coffees }) => {
        return {
          ...state,
          coffees:  coffees
        }
      }
    ),
    on(coffeeActions.get_coffees_failure, (
      state, { payload }) => {
        return {
          ...initialState
        }
    })
);

export function coffeeReducer(
  state: CoffeesState | undefined,
  action: Action) {
    return _coffeeReducer(state, action);
}

export const featureKey = 'coffeesSliceState';
