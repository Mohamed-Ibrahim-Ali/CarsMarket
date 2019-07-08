import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errormessage: string = '';
  reg() {
    this.router.navigate(['/signin']);
  }

  constructor(private lo: AuthService ,private router: Router) { }

  ngOnInit() {
  }
login(form) {
  let data = form.value
  this.lo.login(data.mail, data.pass1)
  .then(() => { 
    this.router.navigate(['/']);
   })
  .catch(err => this.errormessage = err.message)
}
}
