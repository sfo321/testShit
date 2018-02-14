import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SomeRoutingModule } from './some.routing.module';
import { SomeComponent } from './component/some.component';

@NgModule({
  imports: [
    CommonModule,
    SomeRoutingModule
  ],
  declarations: [ SomeComponent ],
})
export class SomeModule { }
