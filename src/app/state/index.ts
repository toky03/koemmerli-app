import {
  ActionReducerMap,
  MetaReducer,
  State
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromOrder from '../orders/order.reducer';
import * as fromArticle from '../articles/article.reducer';
import { InjectionToken } from '@angular/core';


export interface OrderingState {
  [fromOrder.ordersFeatureKey]: fromOrder.StateOrder;
  [fromArticle.articlesFeatureKey]: fromArticle.StateArticle;
}

export const reducers: ActionReducerMap<OrderingState> = {
  [fromOrder.ordersFeatureKey]: fromOrder.reducer,
  [fromArticle.articlesFeatureKey]: fromArticle.reducer
};

export const REDUCERS_TOKEN = new InjectionToken<ActionReducerMap<OrderingState>>('Ordering Reducers');
export const reducerProvider = { provide: REDUCERS_TOKEN, useValue: reducers };

export const metaReducers: MetaReducer<OrderingState>[] = !environment.production ? [] : [];
