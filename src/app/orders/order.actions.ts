import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Order } from './order.model';
import { OrdersPageModule } from './orders.module';

export const createOrderList = createAction(
  '[Order/Api] create OrderList',
  props<{ listName: string }>()
);

export const loadOrders = createAction('[Order/API] Load Orders');

export const loadOrdersSuccesful = createAction(
  '[Order/API] Load OrdersSuccessful',
  props<{ orders: Order[] }>()
);

export const saveOrders = createAction(
  '[Order/API] Save Orders',
  props<{ orders: Order[] }>()
);

export const saveOrdersSuccessful = createAction(
  '[Order/API] Save Orders successful'
);

export const addOrder = createAction(
  '[Order/API] Add Order',
  props<{ order: Order }>()
);

export const markArticleAsBought = createAction(
  '[order/Api] Mark Article as Bought',
  props<{articleId: string, orderId: string}>()
)

export const upsertOrder = createAction(
  '[Order/API] Upsert Order',
  props<{ order: Order }>()
);

export const addOrders = createAction(
  '[Order/API] Add Orders',
  props<{ orders: Order[] }>()
);

export const upsertOrders = createAction(
  '[Order/API] Upsert Orders',
  props<{ orders: Order[] }>()
);

export const updateOrder = createAction(
  '[Order/API] Update Order',
  props<{ order: Update<Order> }>()
);

export const updateOrders = createAction(
  '[Order/API] Update Orders',
  props<{ orders: Update<Order>[] }>()
);

export const deleteOrder = createAction(
  '[Order/API] Delete Order',
  props<{ id: string }>()
);

export const deleteOrders = createAction(
  '[Order/API] Delete Orders',
  props<{ ids: string[] }>()
);

export const clearOrders = createAction('[Order/API] Clear Orders');
