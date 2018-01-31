import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model = {
    userName: '',
    password: '',
    language: '',
  };

  username = 'Username';
  password = 'Password';
  lang = 'Language';

  languages = ['English', 'Bulgarian', 'Francais'];

  onSubmit() {
    console.log(this.model);
  }
  constructor() { }

  ngOnInit() {
  }
}


