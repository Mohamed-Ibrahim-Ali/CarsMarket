import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import {  Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isUser:boolean = false;

  constructor(private as :AuthService , private router: Router, private ff: UserService ) { }

  ngOnInit() {

    this.as.user.subscribe(user => {
      if (user) {
        this.isUser = true;
        this.as.userID = user.uid;
      }
      else {
        this.isUser = false;
        this.as.userID = '';
      }
    })
  }



  logout() {
    this.as.logout().then( () => {
      
      this.router.navigate(['/login'])
    });
  }

}