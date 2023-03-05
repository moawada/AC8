import { _coffeeReducer } from './coffee-list.reducer';
import * as coffeeActions from '../actions/coffee-list.actions';
import { ICoffeeInfo } from '../../models/coffee.models';

describe('_coffeeReducer', () => {
  const initialState = {
    coffees: []
  };

  it('should return the initial state', () => {
    const action = {} as any;
    const state = _coffeeReducer(undefined, action);

    expect(state).toEqual(initialState);
  });

  it('should update state when get_coffees_success action is dispatched', () => {
    const coffees: ICoffeeInfo[] = [
      {
        id: 1,
        uid: '001',
        blend_name: 'Blend 1',
        origin: 'Colombia',
        variety: 'Arabica',
        notes: 'Fruity, Chocolatey',
        intensifier: 'Strong'
      },
      {
        id: 2,
        uid: '002',
        blend_name: 'Blend 2',
        origin: 'Ethiopia',
        variety: 'Sidamo',
        notes: 'Floral, Fruity',
        intensifier: 'Medium'
      }
    ];

    const action = coffeeActions.get_coffees_success({ coffees });
    const state = _coffeeReducer(initialState, action);

    expect(state.coffees).toEqual(coffees);
  });

  it('should reset state when get_coffees_failure action is dispatched', () => {
    const action = coffeeActions.get_coffees_failure({ payload: 'Error' });
    const state = _coffeeReducer(initialState, action);

    expect(state).toEqual(initialState);
  });
});
