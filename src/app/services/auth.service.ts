import {User} from 'app/user.interface';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
@Injectable()
export class AuthLoginCheck{
  public userData;
  public auth: any;
    constructor(private router:Router) {
    }
     isAuthenticated(){
     if(localStorage.getItem('token'))
         return true;
     else
         return false;
 }
   loginRequired():Promise<any>{
  if(this.isAuthenticated()) {
       return Promise.resolve();
     }
     else {
       this.router.navigate(['/home']);
     }
   }
 skipIfLoggedIn(): void{
      if(this.isAuthenticated())
      {
          this.router.navigate(['/home']);
        }
      else
      {
           this.router.navigate(['/home']);
      }

  }
}
