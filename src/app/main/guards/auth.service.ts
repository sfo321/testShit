import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../../fake/user.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';


@Injectable()
export class AuthService {

  isLoggedIn: boolean = !!sessionStorage.getItem('logged');
  isAdmin: boolean = !!sessionStorage.getItem('admin');

  constructor ( private userService: UserService ) {
  }

  login(name: string, password: string): Observable<boolean> {
    return this.userService.searchUsers(name, password)
      .map((user) => {
        console.log(user);
        if (user[0]) {
          sessionStorage.setItem('logged', 'true');
          this.isLoggedIn = true;
        }
        if (user[0] && user[0].role === 'admin') {
          sessionStorage.setItem('admin', 'true');
          this.isAdmin = true;
        }
        return this.isLoggedIn;
      });
  }

  logout(): Observable<boolean> {
    sessionStorage.removeItem('logged');
    sessionStorage.removeItem('admin');
    this.isLoggedIn = false;
    this.isAdmin = false;
    return Observable.of(this.isLoggedIn);
  }
}
