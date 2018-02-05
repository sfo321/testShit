import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './component/login.component';
import { LoginRoutingModule } from './login.routing.module';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  declarations: [ LoginComponent ]
})
export class LoginModule { }
