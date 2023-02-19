import { Action, createReducer, on } from '@ngrx/store';
import { ICoffeeInfo } from 'src/app/models/coffee.models';
import { add_coffee } from './coffee-list.actions';


export interface CoffeesState {
    coffees: Array<ICoffeeInfo>;
};

export const initialState : CoffeesState = {
    coffees: []
};


export const _coffeeReducer = createReducer(
    initialState,
    on(add_coffee, (
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
