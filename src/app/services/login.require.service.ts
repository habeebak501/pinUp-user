
import { Injectable } from '@angular/core';
import { Resolve,ActivatedRouteSnapshot } from '@angular/router';
import { AuthLoginCheck } from 'app/services/auth.service';

@Injectable()
export class LoginRequireResolver implements Resolve<any>{
  constructor(private LogInService : AuthLoginCheck) { }
  resolve(route: ActivatedRouteSnapshot): Promise<any> {
      return this.LogInService.loginRequired();
  }
}
