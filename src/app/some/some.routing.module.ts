import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SomeComponent } from './component/some.component';

const routes: Routes = [
  {
    path: '',
    component: SomeComponent,
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
  providers: [],
})

export class SomeRoutingModule {}
