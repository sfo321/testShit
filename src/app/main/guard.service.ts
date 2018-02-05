import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';

import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
  NavigationExtras,
  CanLoad, Route
} from '@angular/router';

@Injectable()
export class GuardService implements CanActivate, CanActivateChild, CanLoad {
  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.checkLogin();
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.checkLogin();
  }

  canLoad(route: Route): boolean {
    return this.checkLogin();
  }

  checkLogin(): boolean {
    const res = this.authService.isLoggedIn;
    console.log(res);
    return res;
  }
}
