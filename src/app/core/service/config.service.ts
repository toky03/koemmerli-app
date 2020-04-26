import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from 'src/app/config/config.model';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private cachedCategories$: Observable<Category[]>;

  constructor(private httpClient: HttpClient) { }

  public readCategories(): Observable<Category[]> {
    if (!this.cachedCategories$){
      this.cachedCategories$ = this.httpClient.get<Category[]>('../../assets/categories.json');
    }
    return this.cachedCategories$;
  }
}
