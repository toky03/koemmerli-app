import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromOrder from '../orders/order.reducer';
import * as fromArticle from '../articles/article.reducer';


export interface State {
  [fromOrder.ordersFeatureKey]: fromOrder.State;
  [fromArticle.articlesFeatureKey]: fromArticle.State;
}

export const reducers: ActionReducerMap<State> = {

  [fromOrder.ordersFeatureKey]: fromOrder.reducer,
  [fromArticle.articlesFeatureKey]: fromArticle.reducer,
  [fromArticle.articlesFeatureKey]: fromArticle.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
