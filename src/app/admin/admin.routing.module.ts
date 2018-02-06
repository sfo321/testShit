import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditComponent } from './edit.component/edit.component';
import { AdminGuard } from '../main/guards/admin.guard.service';
import { AdminComponent } from './admin.component/admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [ AdminGuard ],
    children: [
      {
        path: 'edit',
        component: EditComponent,
        canActivate: [ AdminGuard ],
      }
    ],
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})

export class AdminRoutingModule {}
