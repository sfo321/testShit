import { NgModule } from '@angular/core';
import { DashComponent } from './dash/dash.component';
import { Routes, RouterModule } from '@angular/router';
import { TrabaComponent } from './traba/traba.component';
import { LoginGuard } from '../main/guards/guard.service';
import { AdminGuard } from '../main/guards/admin.guard.service';

const routes: Routes = [
  {
    path: '',
    component: DashComponent,
    canActivate: [ LoginGuard ],
    canActivateChild: [ AdminGuard ],
    children: [
      {
        path: 'traba',
        component: TrabaComponent,
        canActivate: [ AdminGuard ],
      }
    ],
  },

];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})

export class DashRoutingModule {}
