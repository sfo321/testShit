import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../../fake/user.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { User } from '../../fake/user';


@Injectable()
export class AuthService {

  constructor ( private userService: UserService ) {
  }

  login(name: string, password: string): Observable<User> {
    return this.userService.searchUsers(name, password)
      .map((user) => {
        if (user[0]) {
          sessionStorage.setItem('logged', JSON.stringify(user[0]));
        }
        if (user[0] && user[0].role === 'admin') {
          sessionStorage.setItem('admin', 'true');
        }
        return user[0];
      });
  }

  logout(): Observable<boolean> {
    sessionStorage.removeItem('logged');
    sessionStorage.removeItem('admin');
    return Observable.of(this.isLoggedIn);
  }

  get isLoggedIn(): boolean {
    return !!sessionStorage.getItem('logged');
  }

  get isAdmin(): boolean {
    return !!sessionStorage.getItem('admin');
  }

  get currentUser(): User {
    return JSON.parse(sessionStorage.getItem('logged'));
  }
}
