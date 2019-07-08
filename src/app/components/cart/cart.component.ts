import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { shopping } from 'src/app/interfaces/shopping.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  Cart:shopping[] = [];


save() {
    alert('saved')
}
  constructor(private cc: CartService) { }

  ngOnInit() {
    this.cc.getcart().subscribe(cart => {
      this.Cart = cart.map(shopping => {
        return {
          id: shopping.payload.doc.id,
          ...shopping.payload.doc.data()
        }
      })

    })
  }
  delete(index){
    this.cc.delete(this.Cart[index].id);
  }

}
