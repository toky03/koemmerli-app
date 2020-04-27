import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrdersPageRoutingModule } from './orders-routing.module';

import { OrdersPage } from './orders.page';
import { SortArticlePipe } from '../core/pipe/sort-article.pipe';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, OrdersPageRoutingModule],
  declarations: [OrdersPage, SortArticlePipe],
  providers: [SortArticlePipe],
})
export class OrdersPageModule {}
