import { Article } from '../articles/article.model';
import { ArticleStatus } from '../config/config.model';

export interface Order {
  id: string;
  name: string;
  eintraege: Article[];
  state: 'Erfasst' | 'Eingekauft' | 'Verrechnet';
  boughtArticles: string[];
}
