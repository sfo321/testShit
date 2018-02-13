import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoadingStrategy } from './loading.strategy';
import { LoginGuard } from './guards/guard.service';
import { AuthService } from './guards/auth.service';
import { UserService } from '../fake/user.service';
import { AdminGuard } from './guards/admin.guard.service';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: '../login/login.module#LoginModule',
  },
  {
    path: 'admin',
    loadChildren: '../admin/admin.module#AdminModule',
    canLoad: [ AdminGuard ],
  },
  {
    path: 'dashboard',
    loadChildren: '../dashboard/dashboard.module#DashboardModule',
    canLoad: [ LoginGuard ],
  },
  {
    path: 'some',
    loadChildren: '../some/some.module#SomeModule',
    canLoad: [ LoginGuard ],
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/login',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes,       {
    enableTracing: true,
    preloadingStrategy: LoadingStrategy,
  })],
  exports: [ RouterModule ],
  providers: [ LoadingStrategy, AdminGuard, LoginGuard, UserService, AuthService ],
})
export class AppRoutingModule {
  constructor() {
  }
}
