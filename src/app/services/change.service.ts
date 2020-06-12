import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductInterface } from '../productInterface';


@Injectable()

export class ChangeService{
    filterObj: filterInterface= {
        sizes:[],
        orderBy:'',
    };
    cartProducts:ProductInterface<Array<object>>=[];
    constructor(){}
    private filter = new BehaviorSubject<Object>(this.filterObj);
    private cart = new BehaviorSubject<Array<object>>(this.cartProducts);


    currentCart = this.cart.asObservable();
    currentFilter = this.filter.asObservable();

    updateFilter(filter:filterInterface){
        this.filter.next(filter);
    }
    updateCart(Products:ProductInterface){
        this.cartProducts.next(Products);
    }
}
export interface filterInterface{
    sizes:string[];
    orderBy:'';
}