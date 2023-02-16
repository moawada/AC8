import { Action, createAction, props } from '@ngrx/store';
import { ICoffeeInfo } from '../../models/coffee.models';

export const ADD_COFFEE = createAction(
  '[CoffeeList Component] Add Coffee',
  props <{ coffee: ICoffeeInfo}>()
  );
