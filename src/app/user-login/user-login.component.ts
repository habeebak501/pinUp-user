import { Component, OnInit } from '@angular/core';
import { UserLogin } from 'app/userLogin.interface';
import { Router, ActivatedRoute} from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {AuthServices} from 'app/services/authUserService';
import {toasterJsonService} from 'app/services/toasterJson.service';
import {NotificationsService } from 'angular2-notifications/src/notifications.service'
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ["../style.css","./user-login.component.css"]
})
export class UserLoginComponent implements OnInit {
    public user: UserLogin;
    public toastData:any;
  constructor(private http:Http,private auth:AuthServices,private _service: NotificationsService,private getToast:toasterJsonService,private router:Router) { }
  ngOnInit() {
    this.user = {
      emailAddress: ''
  }
  this.getToast.getToasterJson().subscribe((data)=>{
             this.toastData = data.login;
             console.log(this.toastData)
  })
}
public options = {
timeOut: 1000,
lastOnBottom: true
};
onLogin(data){
  console.log("welcome", data.emailAddress);
  this.auth.userLogin(data).subscribe((data) => {
    let userData = data.json();
          console.log(userData.authsuccess);
          if(userData.authsuccess){
              this._service.success(this.toastData[0].title,this.toastData[0].message)
              setTimeout(() => {
                 this.router.navigate(['/home']);
            }, 2000);
          }
          else
          {
            this._service.error(this.toastData[1].title,this.toastData[1].message)
          }
                  if (userData && userData.token) {
                     // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('userToken', JSON.stringify(userData.token));
                 }
           });
   }
}
