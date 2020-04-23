import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { OrderingEffects } from './ordering.effects';

describe('OrderingEffects', () => {
  let actions$: Observable<any>;
  let effects: OrderingEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        OrderingEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<OrderingEffects>(OrderingEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
