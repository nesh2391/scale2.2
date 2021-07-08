import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProfileService} from '../../auth/logged-in/profile.service';
import {UserAndEnvironmentService} from '../api/user-and-environment.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  uploadForm: FormGroup;
  imageURL: string;
  name: string;
  email: string;
  avatar: string;
  dp: string;
  validImage: Boolean = false;
  invalidImageMessage: String;
  poObject:any;
  constructor(public fb: FormBuilder, private profileService: ProfileService, private userAndEnvironmentService: UserAndEnvironmentService) {
    debugger

    // Reactive Form
    this.uploadForm = this.fb.group({
      avatar: [null, Validators.required]
    });
  }

  ngOnInit() {
    this.profileService.getProfileSubject().subscribe(x => {
      if ( x ) {
        this.name = x.name;
        this.email = x.email;
        this.dp = x.dp;
        console.log('updated ', x.po);
        this.poObject = JSON.stringify(x);
      }
    });
  }

  // Image Preview
  showPreview(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.uploadForm.patchValue({
      avatar: file
    });
    this.uploadForm.get('avatar').updateValueAndValidity();

    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.avatar = reader.result as string;
      if ( parseInt((event.target.files[0].size / 1024).toFixed(4), 10) > 5 ) {
        console.log(' Set valid to false ');
        // tslint:disable-next-line:no-unused-expression
        this.validImage = false;
        this.invalidImageMessage = 'Image can only be 5KB at max';
      } else {
        console.log( 'Esle part' );
        this.validImage = true;
        this.invalidImageMessage = null;
      }
    };
    reader.readAsDataURL(file);
  }


  // Submit Form
  submitImage() {
    console.log(this.uploadForm.value);
    const imageUploadObject = {'base64Imagefile': this.avatar};
    console.log(imageUploadObject);
    this.userAndEnvironmentService.invokeApiUploadUserImage(imageUploadObject).subscribe(x => {
      console.log(x);
      this.uploadForm.reset();
      this.avatar=null;
      this.validImage = false;
      this.invalidImageMessage = null;
      const getTokenToUpdateProfile: string = localStorage.getItem('token');
      this.profileService.updateProfile(getTokenToUpdateProfile);
    });
  }

}
