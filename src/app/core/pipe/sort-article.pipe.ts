import { Pipe, PipeTransform } from '@angular/core';
import { Article } from 'src/app/articles/article.model';

function compareByRank(a: Article, b: Article): number {
  if (a.category && b.category) {
    return a.category.rank - b.category.rank;
  }
  if (a.category) {
    return 1;
  }
  if (b.category) {
    return -1;
  }
  return 0;
}

@Pipe({
  name: 'sortArticle',
})
export class SortArticlePipe implements PipeTransform {
  transform(articles: Article[]): Article[] {
    if (articles) {
      return articles.slice(0).sort(compareByRank);
    } else {
      return null;
    }
  }
}
