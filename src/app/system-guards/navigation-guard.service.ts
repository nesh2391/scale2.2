import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Resolve, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ProfileService } from '../auth/logged-in/profile.service';
@Injectable({
  providedIn: 'root'
})
export class NavigationGuardService implements CanActivate{

  constructor(private router: Router,private profileService: ProfileService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    debugger
    let token=this.profileService.getToken();
    let curentUrl=state.url;
    //user has logged in, now check if they selected a server
    if(this.profileService.getToken()){
      //If the server is selected return true
      if(this.profileService.getServer()){
        return true;
      }
      //if server is not selected and the accessign url is not /server-select redirect to home
      else if (curentUrl=="/server-select"){
        return true;
      }
      this.router.navigate(['/server-select']);
      return true;
    }
    else {
      this.router.navigate(['/home']);
      return false;
    }
  }
}
