import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../fake/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model;
  viewModel = {
    username: 'Username',
    password: 'Password',
    lang: 'Language',
  };
  languages = ['English', 'Bulgarian', 'Francais'];

  constructor(private router: Router, private userService: UserService) {
  }

  ngOnInit() {
    this.resetModel();
  }

  resetModel(): void {
    this.model =  {
      userName: '',
      password: '',
      language: '',
    };
  }

  onSubmit(): void {
    this.userService.searchUsers(this.model.userName, this.model.password)
      .subscribe(hero => hero[0] ? this.router.navigate(['dashboard']) : this.resetModel());
  }
}


