import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ProfileService } from '../auth/logged-in/profile.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public name:string;
  public userSSID:string;
  public server:string;
  public loggedIn:boolean=false;
  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    //console.log("Init was called");
    // this.name = localStorage.getItem('name');
    // this.userSSID = localStorage.getItem('userSSID');
    // if(this.name){
    //   console.log("user logged in");
    //   this.loggedIn=true;
    // }
    // else{
    //   console.log("guest user, HeaderComponent");
    //   this.loggedIn=false;
    // }
    this.profileService.getProfileSubject().subscribe(personObject=>{
      
      if(personObject){
        this.name = personObject.name;
        this.userSSID=personObject.ssid;
        console.log("user logged in",personObject);
        this.loggedIn=true;
        if(personObject.server){
          this.server=personObject.server;
          console.log("server",this.server);
        }
      }
      else{
        console.log("guest user, HeaderComponent");
        this.loggedIn=false;
      }
    });
  }

  signIn(){
    window.location.assign(environment.loginUrl)
  }

}
