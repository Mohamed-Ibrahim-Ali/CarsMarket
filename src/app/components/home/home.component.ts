import { Component, OnInit } from '@angular/core';
import {GoodsService} from 'src/app/services/goods.service'
import { AuthService } from 'src/app/services/auth.service';
import { Good } from 'src/app/interfaces/good.interface';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  alert() {

    alert ('Added To Cart')
  }


  prod:Good[] = []
  isUser:boolean = false;
  add: number = -1;


  constructor(private _goods: GoodsService ,private pp:AuthService, private cs :CartService) {

    this.pp.user.subscribe(user => {
      if (user) {
        this.isUser = false;
      }
      else {
        this.isUser = true;
      }
    })
  }
  ngOnInit() {

    this._goods.getGoods().subscribe(data => this.prod = data)
  }

  addtocart(index: number){
    this.add = index
  }

  buy(amount: number) {
    alert('Added');
    let selectedGood = this.prod[this.add]
    let data = {
      title : selectedGood.title,
      price : selectedGood.price,
      amount: +amount,
    }
    this.cs.addtocart(data).then(() => this.add = -1)
  }

}
