import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { reducers, metaReducers, reducers, metaReducers } from './state';
import * as fromReducer from './state/reducer.reducer';
import { EffectsModule } from '@ngrx/effects';
import { EffectEffects } from './state/effect.effects';
import * as fromOrdering from './state/ordering.reducer';
import { OrderingEffects } from './state/ordering.effects';
import * as fromOrder from './order.reducer';
import * as fromOrder from './orders/order.reducer';
import * as fromArticle from './article/article.reducer';
import * as fromArticle from './articles/article.reducer';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, StoreModule.forRoot({}, {}), StoreModule.forRoot(reducers, {
      metaReducers, 
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    }), !environment.production ? StoreDevtoolsModule.instrument() : [], StoreModule.forFeature(fromReducer.reducerFeatureKey, fromReducer.reducer), EffectsModule.forFeature([EffectEffects, OrderingEffects]), StoreModule.forFeature(fromOrdering.orderingFeatureKey, fromOrdering.reducer), StoreModule.forFeature(fromOrder.ordersFeatureKey, fromOrder.reducer), StoreModule.forFeature(fromArticle.articlesFeatureKey, fromArticle.reducer)],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
