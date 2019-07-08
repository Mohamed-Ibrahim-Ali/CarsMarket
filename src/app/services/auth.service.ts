import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs' ;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user:Observable<firebase.User>
  userID: string = '';

  constructor(private au:AngularFireAuth) {
    this.user = au.user
   }

signin(email, password) {

    return this.au.auth.createUserWithEmailAndPassword(email,password)
  }

login(email, password) {
  return this.au.auth.signInWithEmailAndPassword(email, password)
}

logout(){
  return this.au.auth.signOut()
}
}
