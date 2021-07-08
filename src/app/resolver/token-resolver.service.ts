import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { of } from 'rxjs';
import { finalize, switchMap, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';
import { CognitoService } from '../auth/cognito.service';
import { ProfileService } from '../auth/logged-in/profile.service';

@Injectable({
  providedIn: 'root'
})
export class TokenResolverService implements Resolve<any> {

  constructor(private cognitoService: CognitoService, private profileService: ProfileService, private location: Location,
    private router: Router) {}

resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const urlParams: URLSearchParams = new URLSearchParams(window.location.search);
    const code: string = urlParams.get('code');
    console.log('code received form page', code);
    if (!code) {
        return of(null);
    }
    return this.getTokenFromCognito(code).pipe(
        finalize(() => {
            this.location.replaceState(window.location.pathname);
        })
    );
}

getTokenFromCognito(code: string): Observable<any> {
    console.log('exchanging Code to get token');
    return this.cognitoService.exchangeCodeWithToken(code).pipe(
        switchMap((response: any) => {
            console.log('Response :', response);
            // debugger
            // localStorage.setItem('token', response.id_token);
            // this.cognitoService.exchangeTokenToGetUserName(response.id_token).pipe(
            //     tap(x => {
            //     localStorage.setItem('name', x);
            //     console.log("Call complete ,",x)
            //    }
            // ));
            this.profileService.updateProfile(response.id_token);
            if (response) {
                this.router.navigate(['server-select']);
            }
            return of(response);
        })
    );

    // this.cognitoService.exchangeCodeWithToken(code)
}
}
