import {RouterModule,Routes } from "@angular/router";
import { HomePageComponent } from "./home-page/home-page.component";
import{UserRegisterComponent} from "./user-register/user-register.component";
import{UserLoginComponent} from "./user-login/user-login.component";
import{UserSubDomainComponent} from "./user-sub-domain/user-sub-domain.component";
const APP_ROUTES: Routes = [
  { path:'',redirectTo:'home',pathMatch:'full' },
   { path:'home',component:HomePageComponent },
   {path:'register',component:UserRegisterComponent},
   {path:'logIn',component:UserLoginComponent},
   {path:'subDomain',component:UserSubDomainComponent},
];

export const APP_ROUTES_PROVIDER = RouterModule.forRoot(APP_ROUTES);
