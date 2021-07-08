import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Resolve, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ProfileService } from '../auth/logged-in/profile.service';
@Injectable({
  providedIn: 'root'
})
export class NavigationGuardService implements CanActivate {

  constructor(private router: Router, private profileService: ProfileService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    //debugger;
    const token = this.profileService.getToken();
    const curentUrl = state.url;
    // user has logged in, now check if they selected a server
    if (this.profileService.getToken()) {
      // If the server is selected return true
      if (this.profileService.getServer()) {
        return true;
        // tslint:disable-next-line:triple-equals
      } else if (curentUrl == '/server-select' || curentUrl == '/account') {
        return true;
      }
      // If none of the above conditions are met navigate to server select
      this.router.navigate(['/server-select']);
      return true;
    } else {
      // This can happen if the user is trying to reach a page directly, navigate to home
      this.router.navigate(['/home']);
      return false;
    }
  }
}
