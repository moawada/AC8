import { Action, createReducer, on } from '@ngrx/store';
import { ICoffeeInfo } from 'src/app/models/coffee.models';
import { ADD_COFFEE } from './coffee-list.actions';


export interface CoffeesState {
    coffees: Array<ICoffeeInfo>;
};

const initialState : CoffeesState = {
    coffees: []
};


export const _coffeeReducer = createReducer(
    initialState,
    on(ADD_COFFEE, (
        state, { coffee }) => ({
            ...state,
            list: [...state.coffees, coffee ]
        })
    )
)

 export function coffeeReducer(
    state: CoffeesState | undefined,
    action: Action) {
    return _coffeeReducer(state, action);
}

export const featureKey = 'coffeesSliceState';

//   switch (action.type) {
//     case CoffeeListActionTypes.ADD_COFFEE:
//         return {
//             ...state,
//             list: [...state.list, action.payload],
//         }
//     default:
//       return state;
//   }
// }