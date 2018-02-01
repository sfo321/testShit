import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  model = {
    userName: '',
    password: '',
    language: '',
  };

  username = 'Username';
  password = 'Password';
  lang = 'Language';

  languages = ['English', 'Bulgarian', 'Francais'];

  constructor(private router: Router) {
  }

  onSubmit() {
    console.log(this.model);
    this.router.navigate(['dashboard']);
  }
}


