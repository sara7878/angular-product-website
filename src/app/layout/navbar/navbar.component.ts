import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { itemAdded, product } from 'src/app/_models/product.model';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
 
 
  theAddedproducts:itemAdded[]=[];
  thetotalprice!:number;
  thetotallength:number=0;

  constructor(private productserviceitems:ProductService) { }
  
  

  ngOnInit(): void {
    
    this.productserviceitems.itemAddedfromservice.subscribe(
      (next)=>{
        // console.log(next);
        this.productserviceitems.addItemtocart(next)
        this.theAddedproducts=this.productserviceitems.cartArray; 
        this.thetotalprice=this.productserviceitems.totalprice;
        this.thetotallength=this.productserviceitems.totallength;
      },
      (error)=>{
        console.log("error in showing items in basket")
      },
      ()=>{}
      
    );



    this.productserviceitems.itemdeletedfromservice.subscribe(
      (next)=>{
 
          this.productserviceitems.deleteitemfromcart(next);
          this.theAddedproducts=this.productserviceitems.cartArray; 
          this.thetotalprice=this.productserviceitems.totalprice;
          this.thetotallength=this.productserviceitems.totallength;
          // console.log(this.productserviceitems.cartArray);
        
      },
      (error)=>{
        console.log("error in deleting items in basket")
      },
      ()=>{}
      
    )

   }
  
  deleteitem(delproduct:product){
    this.productserviceitems.deleteitemfromcart(delproduct)
    this.theAddedproducts=this.productserviceitems.cartArray; 
    this.thetotalprice=this.productserviceitems.totalprice;
    this.thetotallength=this.productserviceitems.totallength;
    console.log(this.productserviceitems.cartArray);

   }

  //  ngOnChanges(changes: SimpleChanges):void{

  //   console.log("onchange");
    
  //  }

}
