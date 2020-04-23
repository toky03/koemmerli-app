import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Article } from './article.model';
import * as ArticleActions from './article.actions';

export const articlesFeatureKey = 'articles';

export interface State extends EntityState<Article> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Article> = createEntityAdapter<Article>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});


export const reducer = createReducer(
  initialState,
  on(ArticleActions.addArticle,
    (state, action) => adapter.addOne(action.article, state)
  ),
  on(ArticleActions.upsertArticle,
    (state, action) => adapter.upsertOne(action.article, state)
  ),
  on(ArticleActions.addArticles,
    (state, action) => adapter.addMany(action.articles, state)
  ),
  on(ArticleActions.upsertArticles,
    (state, action) => adapter.upsertMany(action.articles, state)
  ),
  on(ArticleActions.updateArticle,
    (state, action) => adapter.updateOne(action.article, state)
  ),
  on(ArticleActions.updateArticles,
    (state, action) => adapter.updateMany(action.articles, state)
  ),
  on(ArticleActions.deleteArticle,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(ArticleActions.deleteArticles,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(ArticleActions.loadArticles,
    (state, action) => adapter.setAll(action.articles, state)
  ),
  on(ArticleActions.clearArticles,
    state => adapter.removeAll(state)
  ),
);


export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
