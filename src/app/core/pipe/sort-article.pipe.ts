import { Pipe, PipeTransform } from '@angular/core';
import { Article } from 'src/app/articles/article.model';

function compareWithBought(boughtItems: string[]) {
  return (a: Article, b: Article): number => {
    if (
      boughtItems &&
      boughtItems.includes(a.id) &&
      !boughtItems.includes(b.id)
    ) {
      return 1;
    }
    if (
      boughtItems &&
      boughtItems.includes(b.id) &&
      !boughtItems.includes(a.id)
    ) {
      return -1;
    }

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
  };
}
@Pipe({
  name: 'sortArticle',
})
export class SortArticlePipe implements PipeTransform {
  transform(articles: Article[], boughtItems: string[]): Article[] {
    if (articles) {
      return articles.slice(0).sort(compareWithBought(boughtItems));
    } else {
      return null;
    }
  }
}
