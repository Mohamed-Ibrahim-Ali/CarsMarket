import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router' 
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  errormessage: string = '';

  constructor(private pr:AuthService ,private router: Router , private kk: UserService) { 
  }

  ngOnInit() {
  }
  signup(form) {
    let data = form.value
    this.pr.signin(data.mail, data.pass1)
    .then(result => {
      this.router.navigate(['/']);
      this.errormessage = '';
      this.kk.addNewUser(result.user.uid, data.name)
    })
    .catch(err => this.errormessage = err.message);
  }
}
