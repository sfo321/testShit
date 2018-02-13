import {NgModule} from '@angular/core';
import {ModalComponent} from './component/modal.component';
import {ModalService} from './modal.service';
import {SimpleModalComponent} from './modals/simple.modal/modal.component';

@NgModule({
  providers: [
    ModalService
  ],
  declarations: [
    SimpleModalComponent,
    ModalComponent
  ],
  bootstrap: [],
  exports: [ ModalComponent ]
})

export class ModalModule {}
