import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    let tokenJson:any = JSON.parse(''+localStorage.getItem('authToken'));
    console.log(tokenJson.token);
    this.auth.getValue(tokenJson.token).subscribe(data => {
      console.log(data);
    })
  }

}
