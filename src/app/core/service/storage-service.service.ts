import { Injectable } from '@angular/core';
import { StorageIntegrationService } from './storage-integration.service';
import { Article } from 'src/app/articles/article.model';
import { Observable, from } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Order } from 'src/app/orders/order.model';

@Injectable({
  providedIn: 'root',
})
export class StorageServiceService {
  constructor(private storageIntegrationService: StorageIntegrationService) { }

  public saveArticles(articles: Article[]): Observable<void> {
    return from(this.storageIntegrationService.setObject('articles', articles));
  }

  public saveOrders(orders: Order[]): Observable<void> {
    return from(this.storageIntegrationService.setObject('orders', orders));
  }

  public readArticles(): Observable<Article[]> {
    return from(this.storageIntegrationService.getObject('articles')).pipe(
      map((object) => object && object as unknown as Article[])
    );
  }

  public readOrders(): Observable<Order[]> {
    return from(this.storageIntegrationService.getObject('orders')).pipe(
      map((object) => object && object as unknown as Order[])
    );
  }
}
