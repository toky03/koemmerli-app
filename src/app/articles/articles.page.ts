import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Article } from './article.model';
import { Store } from '@ngrx/store';
import {
  addArticle,
  updateArticle,
  loadArticles,
  saveArticles,
} from './article.actions';
import { selectAllArticles } from '../state/ordering.selectors';
import { Observable } from 'rxjs';
import { map, tap, toArray } from 'rxjs/operators';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Category } from '../config/config.model';
import { ConfigService } from '../core/service/config.service';
import { PopoverController, ModalController } from '@ionic/angular';
import { CreateOrderListComponent } from '../create-order-list/create-order-list.component';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.page.html',
  styleUrls: ['./articles.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticlesPage implements OnInit {
  articlesForm: FormGroup;
  articles$: Observable<Article[]>;
  categories$: Observable<Category[]>;

  constructor(
    private store: Store<{}>,
    private formBuilder: FormBuilder,
    private configService: ConfigService,
    public modalController: ModalController
  ) {}

  ngOnInit() {
    this.store.dispatch(loadArticles());
    this.articles$ = this.store.select(selectAllArticles);
    this.initForm();
    this.initOptions();
  }

  createArticle(): void {
    const article: Article = this.articlesForm.value;
    this.store.dispatch(addArticle({ article }));
    this.articlesForm.reset();
  }

  markArticle(articleId: string, marked: boolean) {
    this.store.dispatch(
      updateArticle({
        article: { id: articleId, changes: { marked: !marked } },
      })
    );
  }

  createOrderList() {
    const popover = this.modalController.create({
      component: CreateOrderListComponent,
    });
    popover.then((p) => p.present());
  }

  private initOptions(): void {
    this.categories$ = this.configService.readCategories();
  }

  private initForm(): void {
    this.articlesForm = this.formBuilder.group({
      for: [''],
      item: ['', Validators.required],
      category: [''],
      marked: [],
    });
  }
}
