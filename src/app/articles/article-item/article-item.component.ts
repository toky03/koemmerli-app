import {
  Component,
  Input,
  ChangeDetectionStrategy,
  OnChanges,
} from '@angular/core';
import { Article } from '../article.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { deleteArticle } from '../article.actions';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleItemComponent implements OnChanges {
  private einkaufsListen$: Observable<string[]>;

  constructor(private store: Store<{}>) {}

  @Input() article: Article;

  ngOnChanges(): void {}

  deleteArticle(): void {
    this.store.dispatch(deleteArticle({ id: this.article.id }));
  }
}
