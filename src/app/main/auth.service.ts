import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { UserService } from '../fake/user.service';

@Injectable()
export class AuthService {
  isLoggedIn = false;
  constructor ( private userService: UserService ) {
  }

  login(name: string, password: string): Observable<boolean> {
    return this.userService.searchUsers(name, password)
      .map((user) => {
        this.isLoggedIn = !!user[0];
        return this.isLoggedIn;
      });
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
