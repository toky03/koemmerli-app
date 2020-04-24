import { Component, OnInit } from "@angular/core";
import { Article } from "./article.model";
import { Store } from "@ngrx/store";
import { addArticle } from "./article.actions";
import { selectAllArticles } from "../state/ordering.selectors";
import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";

@Component({
  selector: "app-articles",
  templateUrl: "./articles.page.html",
  styleUrls: ["./articles.page.scss"],
})
export class ArticlesPage implements OnInit {
  articlesForm: FormGroup;
  articles$: Observable<Article>;

  constructor(private store: Store<{}>, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.articles$ = this.store
      .select(selectAllArticles)
      .pipe(tap(console.log));
    this.initForm();
  }

  createArticle(): void {
    const article: Article = this.articlesForm.value;
    this.store.dispatch(addArticle({ article }));
    this.articlesForm.reset();
  }

  private initForm(): void {
    this.articlesForm = this.formBuilder.group({
      for: ["", Validators.required],
      item: ["", Validators.required],
      marked: [],
    });
  }
}
