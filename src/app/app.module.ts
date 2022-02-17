import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
import { PrimeCrudComponent } from './prime-crud/prime-crud.component';






@NgModule({
  declarations: [
    AppComponent,
    PrimengComponent,
    PrimeCrudComponent
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
    ConfirmDialogModule
  ],
  providers: [
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
