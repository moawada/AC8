import { createAction, props } from '@ngrx/store';
import { ICoffeeInfo } from '../../models/coffee.models';

export const add_coffee = createAction(
  '[CoffeeList Component] Add Coffee',
  props <{ coffee: ICoffeeInfo }>()
);

export const get_coffee = createAction(
  '[CoffeeList Component] Get Coffee'
);

export const get_coffee_success = createAction(
  '[CoffeeList Component] Get Coffee Success',
  props <{ coffee: ICoffeeInfo }>()
);

export const get_coffee_failure = createAction(
  '[CoffeeList Component] Get Coffee Failure',
  props <{ payload: any }>()
);

export const get_coffees_count = createAction(
  '[CoffeeList component] Get Coffees Count',
  props <{ count: number }>()
)
