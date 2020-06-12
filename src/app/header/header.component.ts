import { Component, OnInit } from '@angular/core';
import { ChangeService } from '../services/change.service';
import { ProductInterface } from '../productInterface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor( private addcartService:ChangeService) { }
cart:ProductInterface[]=[];
  ngOnInit() {
    this.addcartService.currentCart.subscribe((result: any) => this.cart = result);
  }

}
