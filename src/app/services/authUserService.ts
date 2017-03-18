import {Injectable} from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { Router, ActivatedRoute} from '@angular/router';
import { User } from 'app/user.interface';
@Injectable()
export class AuthServices {
  constructor(private router:Router,private http:Http) { }
  private PinUpUserUrl = 'http://192.168.0.2:3000';
  private pinUpAdminUrl ='http://192.168.0.54:3000';
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
         return this.http.post(this.PinUpUserUrl+'/user/register', myJson,{headers:headers});
       }

        userLogin(userEmail){
          return this.http.post(this.PinUpUserUrl+'/user/signin',{emailAddress:userEmail.emailAddress});

        }

        userSubDomainDropDown(){
        return this.http.get(this.PinUpUserUrl+'/user/register/getUserSubDomainList').map((response:Response)=>
      response.json());
        }

        userSubDomain(name){
          console.log(name)
          let myDropKey={
            'emailAddress':this.userEmailId,
            'subDomain':name
          }

          console.log(this.userEmailId)
          return this.http.post(this.PinUpUserUrl+'/user/register/setUserSubDomain',myDropKey);
        }
        userRecentCard(){
          return this.http.get(this.pinUpAdminUrl+'/recent').map((response:Response)=>
        response.json());
          }
          userLikeUnLike(data,condition){
            console.log("id",data.pinupID);
            console.log(condition)
            var headers=new Headers();
            headers.append('Content-Type', 'application/json');
            let likeKey={
              'pinupID':data.pinupID,
              'like':condition
            }
            console.log(likeKey);
            return this.http.post(this.pinUpAdminUrl+'/pinup/action',likeKey,{headers:headers});
          }
          public logout() {
            console.log("done")
            localStorage.clear();
      this.router.navigate(['/home']);
        window.history.forward();

   }
        }
