import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ConfigService } from '../core/service/config.service';
import { Observable } from 'rxjs';
import { Category } from './config.model';

@Component({
  selector: 'app-config',
  templateUrl: './config.page.html',
  styleUrls: ['./config.page.scss'],
})
export class ConfigPage implements OnInit {

  private categories$: Observable<Category[]>; 


  constructor(private configService: ConfigService) { }

  ngOnInit() {
  }

}
