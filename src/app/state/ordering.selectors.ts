import { createFeatureSelector, createSelector } from '@ngrx/store';
import { OrderingState } from '.';
import { ArticleStatus } from '../config/config.model';
import { StateArticle } from '../articles/article.reducer';
import { Article } from '../articles/article.model';

export const selectArticlesFeature = (state: OrderingState) => state.articles;
 
export const selectAllArticles = createSelector(
  selectArticlesFeature,
  (state: StateArticle) => Object.values(state.entities)
);

