import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app.routing.module';

import {HttpClientModule} from '@angular/common/http';
import {InMemoryDataService} from '../fake/memory.data.service';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {HeaderComponent} from './header/header.component';
import {DataService} from '../fake/data.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    )
  ],
  providers: [ DataService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {
  }
}

