import {Injectable} from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { Router, ActivatedRoute} from '@angular/router';
@Injectable()
export class toasterJsonService {
  constructor(private router:Router,private http:Http) { }
        getToasterJson(){
          return this.http.get('app/toaster.json').map((response:Response)=>
        response.json());
          }
        }
