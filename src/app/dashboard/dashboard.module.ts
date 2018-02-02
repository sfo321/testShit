import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashRoutingModule } from './dash.routing.module';
import { DashComponent } from './dash/dash.component';
import { TrabaComponent } from './traba/traba.component';

@NgModule({
  imports: [
    CommonModule,
    DashRoutingModule
  ],
  declarations: [ DashComponent, TrabaComponent ]
})
export class DashboardModule { }
