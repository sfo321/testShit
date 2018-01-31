import { NgModule } from '@angular/core';
import { DashComponent } from './dash/dash.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DashComponent
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
  providers: [],
})

export class DashRoutingModule {}
