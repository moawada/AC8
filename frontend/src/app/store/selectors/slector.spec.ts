import * as coffeeSelectors  from '../selectors/selector';
import { ICoffeeInfo } from '../../models/coffee.models';

describe('Coffee selectors', () => {
  const initialState = {
    coffees: [
      {
        id: 1,
        uid: '001',
        blendName: 'Blend 1',
        origin: 'Colombia',
        variety: 'Arabica',
        notes: 'Fruity, Chocolatey',
        intensifier: 'Strong'
      },
      {
        id: 2,
        uid: '002',
        blendName: 'Blend 2',
        origin: 'Ethiopia',
        variety: 'Sidamo',
        notes: 'Floral, Fruity',
        intensifier: 'Medium'
      }
    ]
  };

  it('should select the coffees array from state', () => {
    const result = coffeeSelectors.selectCoffees.projector(initialState);

    expect(result).toEqual(initialState.coffees);
  });

  it('should return the coffee with the given ID', () => {
    const id = 2;
    const expectedCoffee: ICoffeeInfo = {
      id: 2,
      uid: '002',
      blendName: 'Blend 2',
      origin: 'Ethiopia',
      variety: 'Sidamo',
      notes: 'Floral, Fruity',
      intensifier: 'Medium'
    };

    const result = coffeeSelectors.getItemById(id).projector(initialState.coffees);

    expect(result).toEqual(expectedCoffee);
  });

  it('should return undefined when no coffee matches the given ID', () => {
    const id = 3;
    const result = coffeeSelectors.getItemById(id).projector(initialState.coffees);

    expect(result).toBeUndefined();
  });
});
