import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../articles/article.model';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { createOrderList } from '../orders/order.actions';

@Component({
  selector: 'app-create-order-list',
  templateUrl: './create-order-list.component.html',
  styleUrls: ['./create-order-list.component.css'],
})
export class CreateOrderListComponent implements OnInit {
  listname: string = '';

  constructor(
    private modalController: ModalController,
    private store: Store<{}>
  ) {}

  ngOnInit() {}

  submit(): void {
    this.store.dispatch(createOrderList({ listName: this.listname }));
    this.modalController.dismiss();
  }
}
