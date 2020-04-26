import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../articles/article.model';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-order-list',
  templateUrl: './create-order-list.component.html',
  styleUrls: ['./create-order-list.component.css']
})
export class CreateOrderListComponent implements OnInit {

  @Input() artikel: Observable<Article[]>;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  submit(): void{
    this.modalController.dismiss();
  }

}
