import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app.routing.module';

import {HttpClientModule} from '@angular/common/http';
import {InMemoryDataService} from '../fake/memory.data.service';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {HeaderComponent} from './header/header.component';
import {DataService} from '../fake/data.service';
import {ModalModule} from '../modal/modal.module';
import {ModalService} from '../modal/modal.service';
import {RendererService} from './renderer.service';
import {ModalComponent} from '../some/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ModalComponent,
  ],
  imports: [
    ModalModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    )
  ],
  providers: [ DataService, ModalService, RendererService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {
  }
}

