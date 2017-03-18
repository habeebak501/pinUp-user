import { Component} from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import{PagerService} from 'app/services/paginationService';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Router, ActivatedRoute} from '@angular/router';
import {AuthServices} from 'app/services/authUserService';
  // import * as _ from 'underscore/underscore';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css',"../style.css"]
})
export class HomePageComponent{
  // array of all items to be paged
   private allItems: any[];
   // pager object
   pager: any = {};
   public isenable:any;
   // paged items
   pagedItems: any[];
  public edited = true;
  public pinupData:any;
constructor(private http: Http,private pagerService: PagerService,private auth:AuthServices,private router:Router) {
  this.auth.userRecentCard().subscribe(data => {
    console.log(data.pinupData)
    this.pinupData=data.pinupData;
  });
 }
   ngOnInit() {
    //  this.auth.skipIfLoggedIn();
     this.isenable=true;
     if(localStorage.getItem('userEmail')){
       console.log('sucess');
       this.isenable=false;
     }
   }
       // get dummy data
  //      this.http.get('app/dummy-data.json')
  //          .map((response: Response) => response.json())
  //          .subscribe(data => {
  //              // set items to json response
  //              this.allItems = data;
  //              console.log( this.allItems)
  //              // initialize to page 1
  //              this.setPage(1);
  //          });
  //         //  this.auth.userRecentCard().subscribe(data => {
  //         //    console.log(data.pinupData)
  //         //    this.pinupData=data.pinupData;
  //         //  });
  //  }
  //  setPage(page: number) {
  //        if (page < 1 || page > this.pager.totalPages) {
  //            return;
  //        }
  //        // get pager object from service
  //        this.pager = this.pagerService.getPager(this.allItems.length, page);
   //
  //        // get current page of items
  //        this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  //    }
  //    viewAll(){
  //      console.log("hiiiiiiiiiiii")
  //      this.edited = false;
  //    }
   //
  //    clearAll()
  //      this.edited = true;
     isLogin(){
       if(localStorage.getItem('userEmail')){
         console.log('sucess');
       }
     }
     onLogOut(){
       this.isenable=true;
       console.log("calling")
    this.auth.logout();
      this.router.navigate(['/home']);
  }

     incrementLike(data){
       this.auth.userLikeUnLike(data,true).subscribe(data => {
         console.log(data);
         this.auth.userRecentCard().subscribe(data => {
           console.log(data.pinupData)
           this.pinupData=data.pinupData;
         });
       });
       console.log(data)
     }
     incrementUnLike(data){
       this.auth.userLikeUnLike(data,false).subscribe(data => {
         console.log(data);

       this.auth.userRecentCard().subscribe(data => {
         console.log(data.pinupData)
         this.pinupData=data.pinupData;
       });
     });
     }
     linkData(data){
       console.log(data.pinupUrl)
       let data1 = JSON.stringify(data);
       console.log(data1)
        this.router.navigate(['home/cardData',{q:data1}]);
     }
 }
