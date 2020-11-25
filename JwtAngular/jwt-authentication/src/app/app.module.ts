import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { LeftSideBarComponent } from './left-side-bar/left-side-bar/left-side-bar.component';
import { RightSideBarComponent } from './right-side-bar/right-side-bar/right-side-bar.component';
import { RightSideBarTwoComponent } from './right-side-bar-two/right-side-bar-two/right-side-bar-two.component';
import { SignInComponent } from './sign-in/sign-in/sign-in.component';
import { RouterModule } from '@angular/router';
import {AuthService} from 'src/app/services/auth.service';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
// for jwt auth // npm install @auth0/angular-jwt --save
import {JwtModule} from '@auth0/angular-jwt';
import { AuthGuardService } from './services/auth-guard.service';

export function token_getter(){
  return localStorage.getItem('authToken');
}

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LeftSideBarComponent,
    RightSideBarComponent,
    RightSideBarTwoComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:'',
        component:SignInComponent
      },
      {
        path:'signin',
        component:SignInComponent
      },
      {
        path:'dashboard',
        component:DashboardComponent,
        canActivate:[AuthGuardService]
      },
    ]),
    JwtModule.forRoot({
      config:{
        tokenGetter:token_getter,
        allowedDomains:['localhost:4200'],
        disallowedRoutes:[]
      }
    })
  ],
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
