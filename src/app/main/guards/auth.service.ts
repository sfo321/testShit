import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../../fake/user.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';


@Injectable()
export class AuthService {

  isLoggedIn = false;
  isAdmin = false;

  constructor ( private userService: UserService ) {
  }

  login(name: string, password: string): Observable<boolean> {
    return this.userService.searchUsers(name, password)
      .map((user) => {
        this.isLoggedIn = !!user[0];
        this.isAdmin = this.isLoggedIn ? user[0].role === 'admin' : false;
        return this.isLoggedIn;
      });
  }

  logout(): Observable<boolean> {
    this.isLoggedIn = false;
    this.isAdmin = false;
    return Observable.of(this.isLoggedIn);
  }
}
