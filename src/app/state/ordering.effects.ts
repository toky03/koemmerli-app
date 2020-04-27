import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  createOrderList,
  addOrder,
  loadOrders,
  loadOrdersSuccesful,
  saveOrders,
  saveOrdersSuccessful,
  updateOrder,
} from '../orders/order.actions';
import { withLatestFrom, concatMap, switchMap, map } from 'rxjs/operators';
import {
  selectMarkedArticles,
  selectAllOrders,
  selectAllArticles,
} from './ordering.selectors';
import { Store } from '@ngrx/store';
import { Order } from '../orders/order.model';
import { Observable, of } from 'rxjs';
import { StorageServiceService } from '../core/service/storage-service.service';
import {
  loadArticles,
  loadArticlesSuccessful,
  saveArticles,
  addArticle,
  saveArticlesSuccesful,
  updateArticle,
} from '../articles/article.actions';

@Injectable()
export class OrderingEffects {
  constructor(
    private actions$: Actions,
    private store: Store<{}>,
    private storageService: StorageServiceService
  ) {}

  createOrderList$: Observable<any> = createEffect(() =>
    this.actions$.pipe(
      ofType(createOrderList),
      concatMap((action) =>
        of(action).pipe(withLatestFrom(this.store.select(selectMarkedArticles)))
      ),
      map(([action, markedArticles]) => {
        const order: Order = {
          id: null,
          eintraege: markedArticles,
          name: action.listName,
          state: 'Erfasst',
          boughtArticles: []
        };
        return addOrder({ order });
      })
    )
  );

  triggerSaveOrder$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addOrder, updateOrder),
      concatMap((action) =>
        of(action).pipe(withLatestFrom(this.store.select(selectAllOrders)))
      ),
      map(([action, orders]) => saveOrders({ orders }))
    )
  );

  triggerSaveArticles = createEffect(() =>
    this.actions$.pipe(
      ofType(addArticle, updateArticle),
      concatMap((action) =>
        of(action).pipe(withLatestFrom(this.store.select(selectAllArticles)))
      ),
      map(([action, articles]) => saveArticles({ articles }))
    )
  );

  loadOrders$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadOrders),
      switchMap(() => this.storageService.readOrders()),
      map((orders) => {
        return loadOrdersSuccesful({ orders: orders ? orders : [] });
      })
    )
  );

  saveOrders$ = createEffect(() =>
    this.actions$.pipe(
      ofType(saveOrders),
      switchMap((action) => this.storageService.saveOrders(action.orders)),
      map(() => saveOrdersSuccessful())
    )
  );

  loadArticles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadArticles),
      switchMap(() => this.storageService.readArticles()),
      map((articles) => {
        console.log(articles);
        return loadArticlesSuccessful({ articles: articles ? articles : [] });
      })
    )
  );

  saveArticles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(saveArticles),
      switchMap((action) => this.storageService.saveArticles(action.articles)),
      map(() => saveArticlesSuccesful())
    )
  );
}
