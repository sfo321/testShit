import { NgModule } from '@angular/core';
import { DashComponent } from './dash/dash.component';
import { Routes, RouterModule } from '@angular/router';
import { TrabaComponent } from './traba/traba.component';
import { GuardService } from '../main/guard.service';

const routes: Routes = [
  {
    path: '',
    component: DashComponent,
    canActivate: [ GuardService ],
    children: [
      {
        path: 'traba',
        component: TrabaComponent,
        canActivateChild: [ GuardService ],
      }
    ],
  },

];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})

export class DashRoutingModule {}
