import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";
import{APP_ROUTES_PROVIDER} from './app.route';
import { MaterialModule } from '@angular/material';
import{PagerService} from 'app/services/paginationService';
import { AppComponent } from './app.component';
import {AuthServices} from 'app/services/authUserService';
import { HomePageComponent } from './home-page/home-page.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSubDomainComponent } from './user-sub-domain/user-sub-domain.component';
import {SimpleNotificationsModule} from 'angular2-notifications';
import {MaxPipe} from './pipes/max.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import {NotificationsService } from 'angular2-notifications/src/notifications.service';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { SampleToastComponent } from './sample-toast/sample-toast.component';
import {toasterJsonService} from 'app/services/toasterJson.service';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    UserRegisterComponent,
    UserLoginComponent,
    UserSubDomainComponent,
     MaxPipe,
     SampleToastComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,MaterialModule,
    HttpModule,APP_ROUTES_PROVIDER,RouterModule,SimpleNotificationsModule,
    ReactiveFormsModule
  ],
      schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [PagerService,AuthServices,NotificationsService,toasterJsonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
