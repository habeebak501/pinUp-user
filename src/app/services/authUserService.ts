import {Injectable} from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { Router, ActivatedRoute} from '@angular/router';
import { User } from 'app/user.interface';
@Injectable()
export class AuthServices {
  constructor(private router:Router,private http:Http) { }
  private PinUpUrl = 'http://192.168.0.35:3000';
  public userEmailId:any;
       userRegistration(userData){
         var headers=new Headers();
         headers.append('Content-Type', 'application/json');
         let myJson={
           'username':userData.username,
           'emailAddress':userData.emailAddress
         }
         this.userEmailId=userData.emailAddress;
         console.log(this.userEmailId)
         console.log(myJson)
         return this.http.post(this.PinUpUrl+'/user/register', myJson,{headers:headers});
       }

        userLogin(userEmail){
          return this.http.post(this.PinUpUrl+'/user/signin',{emailAddress:userEmail.emailAddress});

        }

        userSubDomainDropDown(){
        return this.http.get(this.PinUpUrl+'/user/register/getUserSubDomainList').map((response:Response)=>
      response.json());
        }

        userSubDomain(name){
          console.log(name)
          let myDropKey={
            'emailAddress':this.userEmailId,
            'subDomain':name
          }
          
          console.log(this.userEmailId)
          return this.http.post(this.PinUpUrl+'/user/register/setUserSubDomain',myDropKey);
        }
}
