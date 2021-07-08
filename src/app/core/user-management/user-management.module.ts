import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UmHomeComponent } from './um-home/um-home.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FocusGroupPopupComponent } from './focus-group-popup/focus-group-popup.component';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {BrowserModule} from '@angular/platform-browser';
import {MatDialogModule} from '@angular/material/dialog';
import {AppModule} from '../../app.module';
import { UmFooterComponent } from './um-footer/um-footer.component';



@NgModule({
  declarations: [UmHomeComponent, FocusGroupPopupComponent, UmFooterComponent],
    imports: [
        BrowserModule,
        CommonModule,
        MatButtonModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule, // required animations module
        ToastrModule.forRoot(), // ToastrModule added
        MatPaginatorModule,
        ReactiveFormsModule,
        FormsModule,
    ],
    entryComponents: [FocusGroupPopupComponent]
})
export class UserManagementModule { }
