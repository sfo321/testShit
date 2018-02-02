import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../fake/user.service';
import { LoginComponent } from './component/login.component';
import { LoginRoutingModule } from './login.routing.module';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ UserService ],
  declarations: [ LoginComponent ]
})
export class LoginModule { }
