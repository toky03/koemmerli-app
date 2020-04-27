import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Order } from './order.model';
import { selectAllOrders } from '../state/ordering.selectors';
import { loadOrders } from './order.actions';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {
  orders$: Observable<Order[]>;

  constructor(private store: Store<{}>) {}

  ngOnInit() {
    this.store.dispatch(loadOrders());

    this.orders$ = this.store.select(selectAllOrders);
  }
}
