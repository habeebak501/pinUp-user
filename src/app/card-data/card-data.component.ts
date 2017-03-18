import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import {DomSanitizer} from "@angular/platform-browser";
@Component({
  selector: 'app-card-data',
  templateUrl: './card-data.component.html',
  styleUrls: ["./card-data.component.css","../style.css"]
})
export class CardDataComponent implements OnInit {
  public loader;
  public data1;
  cardLink: any;
  private sub: any;
  pinupLink:any;
  data : any;
  // constructor(private route:ActivatedRoute) { }
  //
  // ngOnInit() {
  //   this.sub = this.route.params.subscribe(params => {
  //        this.data = params['q'];
  //        this.cardLink = JSON.parse(this.data);
  //        console.log(this.cardLink)
  //      });
  //     }
      pdfURL;
constructor(private domSanitizer : DomSanitizer,private route:ActivatedRoute) {
  this.data = 'Angular2'
}
ngOnInit() {
  this.loader=true;
  this.sub = this.route.params.subscribe(params => {
        this.data = params['q'];
         this.pinupLink = JSON.parse(this.data);
        console.log(this.pinupLink)
      });
        setTimeout(() => {
          this.loader=false;
    this.cardLink = this.domSanitizer.bypassSecurityTrustResourceUrl(this.pinupLink.pinupUrl);
  }, 5000);
}
}
