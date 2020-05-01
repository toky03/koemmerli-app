import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Article } from './article.model';
import * as ArticleActions from './article.actions';

export const articlesFeatureKey = 'articles';

export interface StateArticle extends EntityState<Article> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Article> = createEntityAdapter<Article>();

export const initialState: StateArticle = adapter.getInitialState({
  // additional entity state properties
});

const articleReducer = createReducer(
  initialState,
  on(ArticleActions.addArticle, (state, action) => {
    const ids = Object.values(state.entities).map((article) => article.id);
    const newArticle: Article = {
      id: action.article.id ? action.article.id : generateId(ids),
      ...action.article,
    };
    return adapter.addOne(newArticle, state);
  }),
  on(ArticleActions.upsertArticle, (state, action) =>
    adapter.upsertOne(action.article, state)
  ),
  on(ArticleActions.addArticles, (state, action) =>
    adapter.addMany(action.articles, state)
  ),
  on(ArticleActions.upsertArticles, (state, action) =>
    adapter.upsertMany(action.articles, state)
  ),
  on(ArticleActions.updateArticle, (state, action) =>
    adapter.updateOne(action.article, state)
  ),
  on(ArticleActions.updateArticles, (state, action) =>
    adapter.updateMany(action.articles, state)
  ),
  on(ArticleActions.deleteArticle, (state, action) =>
    adapter.removeOne(action.id, state)
  ),
  on(ArticleActions.deleteArticles, (state, action) =>
    adapter.removeMany(action.ids, state)
  ),
  on(ArticleActions.loadArticlesSuccessful, (state, action) =>
    adapter.setAll(action.articles, state)
  ),
  on(ArticleActions.clearArticles, (state) => adapter.removeAll(state))
);

function generateId(ids: string[]): string {
  const tempIds = ids.filter((id) => /^<\d+>$/.test(id));
  const newIndex =
    tempIds && tempIds.length >= 1
      ? Math.max.apply(
          Math,
          tempIds.map((id) => +id.match('\\d+'))
        ) + 1
      : 0;
  return `<${newIndex}>`;
}

export function reducer(state: StateArticle | undefined, action: Action) {
  return articleReducer(state, action);
}
export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
