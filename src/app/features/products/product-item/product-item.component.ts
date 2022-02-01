import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { itemAdded, product } from 'src/app/_models/product.model';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input()
  productItem!: product;

  // @Output()
  // itemAdded : EventEmitter<itemAdded> = new EventEmitter<itemAdded>();

  // productservice=new ProductService();
  constructor(private productrservice:ProductService) { }

  ngOnInit(): void {

  }

  onaddtocartpressed(){
    // this.itemAdded.emit(this.productItem)
    // this.productrservice.addItemtocart(this.productItem)
    this.productrservice.itemAddedfromservice.emit(this.productItem)
    // console.log(this.productItem);
    
  }

  // showProductdetails(){
  //   this.productrservice.itemdetailsservice.emit(this.productItem)
  // }
}
