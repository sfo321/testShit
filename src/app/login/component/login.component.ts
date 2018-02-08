import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { UserModel } from './user.model';
import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../main/guards/auth.service';
import { DataService } from '../../fake/data.service';
import { User } from '../../fake/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: FormGroup;
  isLoggedIn: boolean;

  viewModel = {
    username: 'Username',
    password: 'Password',
    lang: 'Language',
  };
  languages = ['English', 'Bulgarian', 'Francais'];

  constructor(private router: Router, private authService: AuthService, private dataService: DataService, fmBuilder: FormBuilder) {
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
    this.isLoggedIn = this.authService.isLoggedIn;
    this.dataService.current.subscribe((user) => this.setState(user));
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

  setState(user: User): void {
    console.log(user);
    this.isLoggedIn = user == null;
  }

  onSubmit(): void {
    const data = this.model.value;
    this.authService.login(data.username, data.password)
      .subscribe(res => {
        if (res) {
          this.dataService.emitData(res);
          this.isLoggedIn = true;
          this.router.navigate(['dashboard']);
        } else {
          this.model.reset();
        }
      });
  }
}


