import { Component, EventEmitter, Input, Output,OnInit } from '@angular/core'
import  Products  from '../products';
import  { ProductInterface }  from '../productInterface';
import { ChangeService } from '../services/change.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {
  copyProducts:ProductInterface[]= Products;
  products:ProductInterface[] = Products;
  sizes:any=['S','XS','M','L','XL','XXL'];
  filter: filterInterface= {
    sizes:[],
    orderBy:'',
  };
  
  @Output() onProductSelected: EventEmitter<ProductInterface>
  private currentProduct: ProductInterface;
  newProducts:Array<object> = [];
  
  ngOnInit() {
    this.FilterService.currentFilter.subscribe((title: filterInterface) => {
      this.filter=title;
      if(this.filter.sizes.length>0 || this.filter.orderBy.length !=0){
        this.filterProducts();
      }else{
        this.products = this.copyProducts;
      }
      
    });
  }

  constructor(private FilterService:ChangeService) {
    this.onProductSelected = new EventEmitter()
  }

 
  filterSizes(str: string){
    if(str.trim().length){
      if(this.filter.sizes.includes(str)){      
      const index = this.filter.sizes.indexOf(str);     
      this.filter.sizes.splice(index, 1);
        } else{
      this.filter.sizes.push(str);
        }
    }     
    console.log(this.filter)
    this.FilterService.updateFilter(this.filter);
  }

filterProducts(){
  
  if(this.filter.sizes.length>0 && this.filter.orderBy.length>0){
    
  this.filterwithsize();
  this.filterOrderby();
  
  }
  else if(this.filter.orderBy.length>0 && this.filter.sizes.length == 0){
    this.filterOrderby();
  }
  else if(this.filter.sizes.length>0 && this.filter.orderBy.length == 0){
    this.filterwithsize();
  }
 
 this.products = this.newProducts;
  console.log("newproducts",this.newProducts)
}
filterwithsize(){  
  console.log("Products",this.newProducts);
  this.copyProducts.filter( (el) => {
    this.filter.sizes.forEach((element: any) => {
      if(el.availableSizes.includes(element)){
        this.newProducts.push(el)
      }
    });      
  }); 
}
filterOrderby(){
if(this.filter.orderBy == 'asc'){
  this.products.sort(function(a , b) {
    return a.price - b.price;
});
}else{
   this.products.sort(function(a , b) {
    return a.price - b.price;
});
this.products.reverse()
}
 
}

}

export interface filterInterface{
sizes:string[];
orderBy:string;
}