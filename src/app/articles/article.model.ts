import { Category } from '../config/config.model';

export interface Article {
  id: string;
  item: string;
  for: string;
  category: Category;
  marked: boolean;
}
