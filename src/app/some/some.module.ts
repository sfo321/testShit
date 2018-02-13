import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SomeRoutingModule } from './some.routing.module';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  imports: [
    CommonModule,
    SomeRoutingModule
  ],
  declarations: [ ModalComponent ],
})
export class SomeModule { }
