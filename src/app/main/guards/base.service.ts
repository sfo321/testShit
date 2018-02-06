import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
  NavigationExtras,
  CanLoad, Route
} from '@angular/router';

export abstract class BaseService implements CanActivate, CanActivateChild, CanLoad {
  constructor(protected router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.checkPermission();
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.checkPermission();
  }

  canLoad(route: Route): boolean {
    return this.checkPermission();
  }

  protected abstract checkPermission();
}
