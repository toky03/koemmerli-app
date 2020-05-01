import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { ConfigService } from '../core/service/config.service';
import { Observable } from 'rxjs';
import { Category } from './config.model';
import { IonReorderGroup } from '@ionic/angular';

@Component({
  selector: 'app-config',
  templateUrl: './config.page.html',
  styleUrls: ['./config.page.scss'],
})
export class ConfigPage implements OnInit {
  @ViewChild(IonReorderGroup, { static: false }) reorderGroup: IonReorderGroup;

  categories$: Observable<Category[]>;

  constructor(private configService: ConfigService) {}

  ngOnInit() {
    this.categories$ = this.configService.readCategories();
  }

  doReorder(ev: any) {
    // The `from` and `to` properties contain the index of the item
    // when the drag started and ended, respectively
    console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);

    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. This method can also be called directly
    // by the reorder group
    ev.detail.complete();
  }
}
