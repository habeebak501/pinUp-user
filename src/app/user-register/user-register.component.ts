import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { User } from 'app/user.interface';
import {AuthServices} from 'app/services/authUserService';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import {NotificationsService } from 'angular2-notifications/src/notifications.service'
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {toasterJsonService} from 'app/services/toasterJson.service';
@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ["../style.css","./user-register.component.css"]
})
export class UserRegisterComponent implements OnInit {
  public user: User;
  public toasterData;
  constructor(private router:Router,private auth:AuthServices,private http: Http,private _service: NotificationsService,private getToast:toasterJsonService) { }
  ngOnInit() {
    this.user = {
      username: '',
      emailAddress: ''
    }
this.getToast.getToasterJson().subscribe((data)=>{
           this.toasterData = data.register;
          console.log( this.toasterData)
         });
  }
  public options = {
  timeOut: 1000,
  lastOnBottom: true
};
onRegister(body,valid){
  console.log("calling",body)
  this.auth.userRegistration(body).subscribe((data)=>{
    let topic=data.json();
    console.log(topic)
    console.log(topic.success)
    if(topic.success){
      this._service.success(this.toasterData[0].title,this.toasterData[0].message);
        localStorage.setItem('userEmail', JSON.stringify(body.emailAddress));
      setTimeout(() => {
         this.router.navigate(['/subDomain']);
    }, 2000);
  }
  else
  {
    this._service.error(this.toasterData[1].title,this.toasterData[1].message)
  }
  })
  //  this.router.navigate(["SubDomain"]);
}
}
