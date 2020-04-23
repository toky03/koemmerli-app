import { createAction, props } from '@ngrx/store';

export const loadOrderings = createAction(
  '[Ordering] Load Orderings'
);

export const loadOrderingsSuccess = createAction(
  '[Ordering] Load Orderings Success',
  props<{ data: any }>()
);

export const loadOrderingsFailure = createAction(
  '[Ordering] Load Orderings Failure',
  props<{ error: any }>()
);
