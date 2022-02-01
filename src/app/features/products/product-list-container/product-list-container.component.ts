import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { product } from 'src/app/_models/product.model';

@Component({
  selector: 'app-product-list-container',
  templateUrl: './product-list-container.component.html',
  styleUrls: ['./product-list-container.component.scss']
})
export class ProductListContainerComponent implements OnInit {

  @Output()
  onitemaddedfromcontainer: EventEmitter<product>=new EventEmitter<product>();

  constructor() { }

  ngOnInit(): void {
  }

  
  onItemAdded(ev:product){
    this.onitemaddedfromcontainer.emit(ev)
  }
}
