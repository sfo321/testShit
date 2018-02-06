import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin.routing.module';
import { EditComponent } from './edit.component/edit.component';
import { AdminComponent } from './admin.component/admin.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
  ],
  declarations: [ AdminComponent, EditComponent ]
})
export class AdminModule { }
