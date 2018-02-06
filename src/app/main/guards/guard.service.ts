import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

import { Router,} from '@angular/router';

@Injectable()
export class LoginGuard extends BaseService {
  constructor(private authService: AuthService, protected router: Router) {
    super(router);
  }

  checkPermission(): boolean {
    return this.authService.isLoggedIn;
  }
}
