import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CognitoService } from '../cognito.service';
import { ProfileObject } from './profile-object';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
   po=new ProfileObject();
   subject = new BehaviorSubject(undefined);
  constructor(private cognitoService: CognitoService) { }

  updateProfile(token:string){
    
    
    this.po.token=token;
    //Persist the token
    localStorage.setItem('token', token);
    //Decode the token
    this.cognitoService.exchangeTokenToGetUserName(token).pipe(
      tap(x => {
        this.po.name=x["name"];
        this.po.email=x["email"];
        this.po.id=x["id"];
      localStorage.setItem('user-id', x["id"]);
      console.log("Call complete ,",x)
     }
  )).subscribe();
     this.subject.next(this.po);

  }
  destroyProfile(){
    localStorage.setItem('token', null);
  }
  getProfileSubject():Observable<any>{
    return this.subject.asObservable();
  }

  getToken(){
    return localStorage.getItem('token');
  }
  setServer(server:string){
    this.po.server=server;
    this.subject.next(this.po);
  }
  getServer():string{
    return this.po.server;
  }
}
