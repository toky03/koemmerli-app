import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { ArticlesPageRoutingModule } from './articles-routing.module';

import { ArticlesPage } from './articles.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArticleItemComponent } from './article-item/article-item.component';
import { FetchOrdersFromArticlePipe } from '../core/pipe/fetch-orders-from-article.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ArticlesPageRoutingModule
  ],
  declarations: [ArticlesPage, ArticleItemComponent, FetchOrdersFromArticlePipe],
  providers: [FetchOrdersFromArticlePipe]
})
export class ArticlesPageModule {}
