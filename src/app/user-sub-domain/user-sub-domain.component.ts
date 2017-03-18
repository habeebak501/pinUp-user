import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '@angular/material';
import 'rxjs/Rx';
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { Router } from '@angular/router';
import {AuthServices} from 'app/services/authUserService';
@Component({
  templateUrl: './user-sub-domain.component.html',
  styleUrls: ['./user-sub-domain.component.css']
})
export class UserSubDomainComponent{
  public subDomainData:string[];
  public disableButton:any;
    constructor(private auth:AuthServices,private router:Router) {
    this.auth.userSubDomainDropDown().subscribe((data)=>{
      console.log(data)
      this.subDomainData=data;
      console.log(this.subDomainData)
    })
    this.disableButton=false;
  }
     onChange(name){
       this.disableButton=true;
       console.log("hhhhhhhhiiiiiiiiiiiiiiiiii",name)
      this.auth.userSubDomain(name).subscribe((data)=>{
        console.log(data);
    })
  }
    name: string = "tech";
    subDomainPage(){
      this.router.navigate(['/home']);
    }
}
