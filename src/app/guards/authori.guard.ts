import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateFn,
  GuardResult,
  MaybeAsync,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { AppStateService } from '../service/app-state.service';

@Injectable({
  providedIn: 'root',
})
export class Authori implements CanActivate {
  constructor(private appState: AppStateService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): MaybeAsync<GuardResult> {
    if (this.appState.authState.roles.includes('ADMIN')) {
      return true;
    } else {
      this.router.navigateByUrl('/admin/not-authorize');
      return false;
    }
  }
}
