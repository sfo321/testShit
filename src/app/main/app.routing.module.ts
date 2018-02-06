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
    path: 'dashboard',
    loadChildren: '../dashboard/dashboard.module#DashboardModule',
    canLoad: [ LoginGuard ],
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes,       {
    enableTracing: true,
    preloadingStrategy: LoadingStrategy,

  }) ],
  exports: [ RouterModule ],
  providers: [ LoadingStrategy, AdminGuard, LoginGuard, AuthService, UserService ],
})
export class AppRoutingModule {}
