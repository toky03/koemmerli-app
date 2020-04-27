import { createSelector } from '@ngrx/store';
import { OrderingState } from '.';
import { StateArticle } from '../articles/article.reducer';
import { Article } from '../articles/article.model';
import { StateOrder } from '../orders/order.reducer';
import { Order } from '../orders/order.model';

export const selectArticlesFeature = (state: OrderingState) => state.articles;

export const selectOrdersFeature = (state: OrderingState) => state.orders;

export const selectAllArticles = createSelector(
  selectArticlesFeature,
  (state: StateArticle) => Object.values(state.entities)
);

export const selectMarkedArticles = createSelector(
  selectAllArticles,
  (articles: Article[]) => articles.filter((article) => article.marked)
);

export const selectAllOrders = createSelector(
  selectOrdersFeature,
  (state: StateOrder) => Object.values(state.entities)
);

export const selectAllOrdersFromArticle = createSelector(
  selectAllOrders,
  (state: Order[], properties) =>
    state.slice(0).filter((order) => {
      return (
        order.eintraege
          .slice(0)
          .filter((article) => article.id === properties.articleId).length > 0
      );
    })
);
