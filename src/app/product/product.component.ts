import { Component, Input, Output, HostBinding, OnInit } from '@angular/core'
import { ProductInterface } from '../productInterface'
import { ChangeService } from '../services/change.service'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: ProductInterface
  cart:ProductInterface<Array<object>>;
  constructor( private addcartService:ChangeService) { }

  ngOnInit() {
    this.addcartService.currentCart.subscribe((result: any) => this.cart = result);
  }
  addProduct(product:ProductInterface){
    this.cart.push(product);
  this.addcartService.updateCart(this.cart)
  }
}
