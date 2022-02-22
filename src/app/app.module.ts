import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {ButtonModule} from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import { PrimengComponent } from './primeng/primeng.component';
import { InputTextareaModule } from 'primeng/inputtextarea';
import {InputNumberModule} from 'primeng/inputnumber';
import { ScrollingModule } from '@angular/cdk/scrolling';
import {DialogModule} from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RadioButtonModule} from 'primeng/radiobutton';
import {DropdownModule} from 'primeng/dropdown';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { UserListComponent } from './user-list/user-list.component';
import {ImageModule} from 'primeng/image';
import {FileUploadModule} from 'primeng/fileupload';
import {CheckboxModule} from 'primeng/checkbox';
import { ConfirmationService } from 'primeng/api';
import {InputTextModule} from 'primeng/inputtext';








@NgModule({
  declarations: [
    AppComponent,
    PrimengComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    TableModule,
    AppRoutingModule,
    FormsModule,
    ButtonModule,
    HttpClientModule,
		ToastModule,
    InputTextareaModule,
    InputNumberModule,
    ScrollingModule,
    DialogModule,
    BrowserAnimationsModule,
    RadioButtonModule,
    DropdownModule,
    InputTextareaModule,
    InputNumberModule,
    ConfirmDialogModule,
    ImageModule,
    FileUploadModule,
    CheckboxModule,
    ReactiveFormsModule,
    FormsModule,
    InputTextModule
  ],
  providers: [ConfirmationService
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
