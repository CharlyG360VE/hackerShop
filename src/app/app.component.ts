import {Component} from '@angular/core';
import {Cart, Product} from "../types";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  products: Product[];
  cart: Cart;

  constructor() {
    this.cart = {
      items: []
    } as Cart
  }

  ngOnInit() {
    this.products = [...PRODUCTS].map((product, index) => {
      product.id = index + 1;
      product.image = `/assets/images/items/${product.name.toLocaleLowerCase()}.png`;
      product.cartQuantity = 0;
      return product;
    });
  }

  addToCart(product: Product) {
    console.log( product );
    this.cart.items.push(
      {
        id: product.id,
        item: product.name,
        quantity: product.cartQuantity
      }
    );
  }

  updateCart(product: Product) {
    this.cart.items.forEach( ( item, index ) => {
      if ( item.id === product.id ) {
        item.quantity = product.cartQuantity;
        if ( product.cartQuantity === 0 ) {
          this.cart.items.splice( index, 1 );
        }
      }
    } )
  }
}


export const PRODUCTS: Product[] = [
  {
    name: "Cap",
    price: 5
  },
  {
    name: "HandBag",
    price: 30
  },
  {
    name: "Shirt",
    price: 35
  },
  {
    name: "Shoe",
    price: 50
  },
  {
    name: "Pant",
    price: 35
  },
  {
    name: "Slipper",
    price: 25
  }
];
