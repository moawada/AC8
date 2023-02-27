import { createAction, props } from '@ngrx/store';
import { ICoffeeInfo } from '../../models/coffee.models';


export const get_coffees = createAction(
  '[CoffeeList Component] Get Coffee',
);

export const get_coffees_success = createAction(
  '[CoffeeList Component] Get Coffee Success',
  props <{ coffees: ICoffeeInfo[] }>()
);

export const get_coffees_failure = createAction(
  '[CoffeeList Component] Get Coffee Failure',
  props <{ payload: any }>()
);

