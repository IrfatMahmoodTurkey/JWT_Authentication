import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-left-side-bar',
  templateUrl: './left-side-bar.component.html',
  styleUrls: ['./left-side-bar.component.css']
})
export class LeftSideBarComponent implements OnInit {
  userData:any = null;
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.userData = this.authService.setUserDetails();
  }

}
