import * as fromOrdering from './ordering.actions';

describe('loadOrderings', () => {
  it('should return an action', () => {
    expect(fromOrdering.loadOrderings().type).toBe('[Ordering] Load Orderings');
  });
});
