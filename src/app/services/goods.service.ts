import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class GoodsService {

  constructor(private gos: AngularFirestore) {}

  getGoods() {

    return this.gos.collection('goods').valueChanges()
  
  }

}
