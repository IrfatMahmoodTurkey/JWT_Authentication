import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/dashboard';
  loginData:any;
  errorMessage:any;
  constructor(private authService:AuthService, private router:Router,private route: ActivatedRoute) {
    if(this.authService.isLoggedIn){
      this.router.navigate([this.returnUrl]);
    }
  }

  ngOnInit(): void {
    this.loginData = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      userType: new FormControl('', [Validators.required]),
    });
  }


  login(value: any) {
    this.authService.login(value).subscribe(
      (response) => {
        this.router.navigate([this.returnUrl]);
      },
      (err) => {
        this.errorMessage = 'Invalid User Name or Password'
      });
  }
}
