import {NgModule} from '@angular/core';
import {ModalComponent} from './component/modal.component';
import {SimpleModalComponent} from './modals/simple.modal/modal.component';

@NgModule({
  providers: [],
  declarations: [
    SimpleModalComponent,
    ModalComponent
  ],
  bootstrap: [],
  exports: [ ModalComponent ]
})

export class ModalModule {}
