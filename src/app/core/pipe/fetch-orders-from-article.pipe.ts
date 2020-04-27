import { Pipe, PipeTransform } from '@angular/core';
import { Order } from 'src/app/orders/order.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectAllOrdersFromArticle } from 'src/app/state/ordering.selectors';
import { Article } from 'src/app/articles/article.model';

@Pipe({
  name: 'fetchOrdersFromArticle',
})
export class FetchOrdersFromArticlePipe implements PipeTransform {
  constructor(private store: Store<{}>) { }

  transform(article: Article): Observable<Order[]> {
    return this.store.select(selectAllOrdersFromArticle, { articleId: article.id });
  }
}
