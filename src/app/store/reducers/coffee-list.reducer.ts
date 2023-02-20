import { Action, createReducer, on } from '@ngrx/store';
import { ICoffeeInfo } from 'src/app/models/coffee.models';
import * as coffeeActions from '../actions/coffee-list.actions';


export interface CoffeesState {
    coffees: Array<ICoffeeInfo>;
    count: number;
};

export const initialState : CoffeesState = {
    coffees: [],
    count: 0,
};


export const _coffeeReducer = createReducer(
    initialState,
    on(coffeeActions.add_coffee, (
        state, { coffee }) => ({
            ...state,
            coffees: [...state.coffees, coffee ]
        })
    )
)

 export function coffeeReducer(
    state: CoffeesState | undefined,
    action: Action) {
    return _coffeeReducer(state, action);
}

export const featureKey = 'coffeesSliceState';
