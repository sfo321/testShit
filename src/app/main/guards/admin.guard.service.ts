import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Router } from '@angular/router';

@Injectable()
export class AdminGuard extends BaseService {
  constructor(protected authService: AuthService, protected router: Router) {
    super(router);
  }

  checkPermission(): boolean {
    return this.authService.isAdmin;
  }
}
