import { Component} from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import{PagerService} from 'app/services/paginationService';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
  // import * as _ from 'underscore/underscore';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent{
  // array of all items to be paged
   private allItems: any[];
   // pager object
   pager: any = {};
   // paged items
   pagedItems: any[];
  public edited = true;
constructor(private http: Http,private pagerService: PagerService) { }
   ngOnInit() {
       // get dummy data
       this.http.get('app/dummy-data.json')
           .map((response: Response) => response.json())
           .subscribe(data => {
               // set items to json response
               this.allItems = data;
               console.log( this.allItems)
               // initialize to page 1
               this.setPage(1);
           });
   }
   setPage(page: number) {
         if (page < 1 || page > this.pager.totalPages) {
             return;
         }
         // get pager object from service
         this.pager = this.pagerService.getPager(this.allItems.length, page);

         // get current page of items
         this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
     }
     viewAll(){
       console.log("hiiiiiiiiiiii")
       this.edited = false;
     }
     clearAll(){
       this.edited = true;
     }
 }
