import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Order } from './order.model';
import * as OrderActions from './order.actions';

export const ordersFeatureKey = 'orders';

export interface StateOrder extends EntityState<Order> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Order> = createEntityAdapter<Order>();

export const initialState: StateOrder = adapter.getInitialState({
  // additional entity state properties
});

export const reducer = createReducer(
  initialState,
  on(OrderActions.addOrder, (state, action) => {
    const ids = Object.values(state.entities).map((order) => order.id);
    const newOrder: Order = {
      ...action.order,
      id: action.order.id ? action.order.id : generateId(ids),
    };
    return adapter.addOne(newOrder, state);
  }),
  on(OrderActions.markArticleAsBought, (state, action) => {
    const oldOrderList = Object.values(state.entities).find(
      (p) => p.id === action.orderId
    );
    let tempBoughtItems = oldOrderList.boughtArticles
      ? oldOrderList.boughtArticles.slice(0)
      : [];
    if (tempBoughtItems.includes(action.articleId)) {
      const index = tempBoughtItems.findIndex((a) => a === action.articleId);
      tempBoughtItems.splice(index, 1);
    } else {
      tempBoughtItems = [...tempBoughtItems, action.articleId];
    }
    return adapter.updateOne(
      {
        id: action.orderId,
        changes: { ...oldOrderList, boughtArticles: tempBoughtItems },
      },
      state
    );
  }),
  on(OrderActions.upsertOrder, (state, action) =>
    adapter.upsertOne(action.order, state)
  ),
  on(OrderActions.addOrders, (state, action) =>
    adapter.addMany(action.orders, state)
  ),
  on(OrderActions.upsertOrders, (state, action) =>
    adapter.upsertMany(action.orders, state)
  ),
  on(OrderActions.updateOrder, (state, action) =>
    adapter.updateOne(action.order, state)
  ),
  on(OrderActions.updateOrders, (state, action) =>
    adapter.updateMany(action.orders, state)
  ),
  on(OrderActions.deleteOrder, (state, action) =>
    adapter.removeOne(action.id, state)
  ),
  on(OrderActions.deleteOrders, (state, action) =>
    adapter.removeMany(action.ids, state)
  ),
  on(OrderActions.loadOrdersSuccesful, (state, action) =>
    adapter.setAll(action.orders, state)
  ),
  on(OrderActions.clearOrders, (state) => adapter.removeAll(state))
);

function generateId(ids: string[]): string {
  const tempIds = ids.filter((id) => /^<\d+>$/.test(id));
  const newIndex =
    tempIds && tempIds.length >= 1
      ? Math.max.apply(
        Math,
        tempIds.map((id) => +id.match('\\d+'))
      ) + 1
      : 0;
  return `<${newIndex}>`;
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
