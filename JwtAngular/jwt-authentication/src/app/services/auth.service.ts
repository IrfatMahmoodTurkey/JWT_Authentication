import { Injectable } from '@angular/core';    
import { HttpClient } from '@angular/common/http';    
import { BehaviorSubject } from 'rxjs';    
import { map } from 'rxjs/operators';    
import { Router } from '@angular/router';    
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    if(localStorage.getItem('authToken') != null){
      this.loggedIn.next(true); 
    }
    else{
      this.loggedIn.next(false); 
    }
    
    return this.loggedIn.asObservable();
  }

  constructor(private http: HttpClient, private router: Router) { }
  
  login(userDetails: any) {
    return this.http.post('https://localhost:44328/api/auth/login', userDetails)
      .pipe(map(response => {
        localStorage.setItem('authToken', JSON.stringify(response));
        this.setUserDetails();
        return response;
      }));
  }

  setUserDetails() {    
    if (localStorage.getItem('authToken') != null) {    
      let token = ''+localStorage.getItem('authToken'); 
      const decodeUserDetails = JSON.parse(window.atob(token.split('.')[1]));
      const userDetails = new User(decodeUserDetails.sub, true, decodeUserDetails.role);
      this.loggedIn.next(true);   
      return userDetails; 
    }
    else{
      return null;
    }
  }
  
  logout() {    
    localStorage.removeItem('authToken');    
    this.router.navigate(['/signin']);
    this.loggedIn.next(false);      
  } 
}
