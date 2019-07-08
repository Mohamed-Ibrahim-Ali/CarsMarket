import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import { Good } from '../interfaces/good.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private fs:AngularFirestore ,private as:AuthService) {
  }

addtocart(data: Good){
return this.fs.collection("users/"+this.as.userID+"/cart").add(data);
}
getcart(){
  return this.fs.collection("users/"+this.as.userID+"/cart").snapshotChanges();
}

delete(id){
  return this.fs.doc("users/"+this.as.userID+"/cart/"+id).delete();
}

}
