import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { UserModel } from './user.model';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../fake/user.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: FormGroup;

  viewModel = {
    username: 'Username',
    password: 'Password',
    lang: 'Language',
  };
  languages = ['English', 'Bulgarian', 'Francais'];

  constructor(private router: Router, private userService: UserService, fmBuilder: FormBuilder) {
    this.model = fmBuilder.group({
      'username': new FormControl('', [Validators.required, Validators.maxLength(5)]),
      'password': new FormControl('', [Validators.required, Validators.maxLength(5)]),
      'language': [],
    });
  }

  ngOnInit() {
    this.model.valueChanges
      .map((value) => {
        this.restrict(value);
        return this.setValue(value);
      }).subscribe(() => {});
  }

  restrict(value: UserModel): UserModel {
    Object.keys(value).forEach((key) => {
      const prop = this.model.get(key);
      if (prop.errors && prop.errors.maxlength) {
        value[key] = value[key].substring(0, prop.errors.maxlength.requiredLength);
      }
    });
    return value;
  }

  setValue(value: UserModel): void {
    this.model.setValue(value, { onlySelf: true, emitEvent: false });
  }

  onSubmit(): void {
    const data = this.model.value;
    this.userService.searchUsers(data.username, data.password)
      .subscribe(user => user[0] ? this.router.navigate(['dashboard']) : this.model.reset());
  }
}


