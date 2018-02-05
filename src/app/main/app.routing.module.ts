import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoadingStrategy } from './loading.strategy';
import { GuardService } from './guard.service';
import { AuthService } from './auth.service';
import { UserService } from '../fake/user.service';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: '../login/login.module#LoginModule',
  },
  {
    path: 'dashboard',
    loadChildren: '../dashboard/dashboard.module#DashboardModule',
    canLoad: [ GuardService ],
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
  providers: [ LoadingStrategy, GuardService, AuthService, UserService ],
})
export class AppRoutingModule {}
