import { NgModule } from '@angular/core';
import { DashComponent } from './dash/dash.component';
import { Routes, RouterModule } from '@angular/router';
import { TrabaComponent } from './traba/traba.component';

const routes: Routes = [
  {
    path: '',
    component: DashComponent,
    children: [
      {
        path: 'traba',
        component: TrabaComponent,
      }
    ],
  },

];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
  providers: [],
})

export class DashRoutingModule {}
