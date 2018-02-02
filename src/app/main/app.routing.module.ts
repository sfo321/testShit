import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoadingStrategy } from './loading.strategy';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: '../login/login.module#LoginModule',
  },
  {
    path: 'dashboard',
    loadChildren: '../dashboard/dashboard.module#DashboardModule',
  },
  // {
  //   path: '**',
  //   redirectTo: '/login',
  //   pathMatch: 'full',
  // }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes,       {
    enableTracing: true,
    preloadingStrategy: LoadingStrategy,

  }) ],
  exports: [ RouterModule ],
  providers: [ LoadingStrategy ],
})
export class AppRoutingModule {}
