import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product, UpdateMode} from "../../types";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Input() products: Product[];
  @Output() onAddToCart: EventEmitter<Product> = new EventEmitter();
  @Output() onQuantityUpdate: EventEmitter<Product> = new EventEmitter();

  ngOnInit() {}

  addToCart( index: number ) {
    this.products[ index ].cartQuantity =  this.products[ index ].cartQuantity + 1;
    this.onAddToCart.emit( this.products[ index ] );
  }
  
  subtractQuantity( index: number ) {
    this.products[ index ].cartQuantity =  this.products[ index ].cartQuantity - 1;
    this.onQuantityUpdate.emit( this.products[ index ] );
  }

  updateQuantity( index: number ) {
    this.products[ index ].cartQuantity =  this.products[ index ].cartQuantity + 1;
    this.onQuantityUpdate.emit( this.products[ index ] );
  }

}


