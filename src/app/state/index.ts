import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromOrder from '../orders/order.reducer';
import * as fromArticle from '../articles/article.reducer';


export interface OrderingState {
  [fromOrder.ordersFeatureKey]: fromOrder.StateOrder;
  [fromArticle.articlesFeatureKey]: fromArticle.StateArticle;
}

export const reducers: ActionReducerMap<OrderingState> = {

  [fromOrder.ordersFeatureKey]: fromOrder.reducer,
  [fromArticle.articlesFeatureKey]: fromArticle.reducer,
};


export const metaReducers: MetaReducer<OrderingState>[] = !environment.production ? [] : [];
