import { createAction, props } from '@ngrx/store';
import { ICoffeeInfo } from '../../models/coffee.models';

export const add_coffee = createAction(
  '[CoffeeList Component] Add Coffee',
  props <{ coffee: ICoffeeInfo}>()
  );
