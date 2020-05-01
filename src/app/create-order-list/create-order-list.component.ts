import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../articles/article.model';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { createOrderList } from '../orders/order.actions';
import { selectMarkedArticles } from '../state/ordering.selectors';

@Component({
  selector: 'app-create-order-list',
  templateUrl: './create-order-list.component.html',
  styleUrls: ['./create-order-list.component.css'],
})
export class CreateOrderListComponent implements OnInit {
  markedArticles$: Observable<Article[]>;
  listname = '';

  constructor(
    private modalController: ModalController,
    private store: Store<{}>
  ) {}

  ngOnInit() {
    this.markedArticles$ = this.store.select(selectMarkedArticles);
  }

  submit(): void {
    this.store.dispatch(createOrderList({ listName: this.listname }));
    
    this.modalController.dismiss();
  }
  cancel(): void {
    this.modalController.dismiss();
  }
}
