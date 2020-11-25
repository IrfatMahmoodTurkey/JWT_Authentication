import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private jwtHelper: JwtHelperService) { }

  canActivate(){
    let token = localStorage.getItem('authToken');
    
    if(token && !this.jwtHelper.isTokenExpired(token)){
      console.log('True');
      return true;
    }
    else{
      console.log('false');
      this.router.navigate(['signin'])
      return false;
    }
  }
}
