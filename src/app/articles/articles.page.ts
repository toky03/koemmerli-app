import { Component, OnInit } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.page.html',
  styleUrls: ['./articles.page.scss'],
})
export class ArticlesPage implements OnInit {

  articles: Article[];

  constructor() { }

  ngOnInit() {
    this.articles = [
      {heading: "Gurke", content: "10 mal"}
    ];
  }

}
