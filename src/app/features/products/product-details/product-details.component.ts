import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { itemAdded, product } from 'src/app/_models/product.model';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) { }

  productdetails:product= 
   {_id:1,
    data:[{_id:1,name:"photo camera",description:"photo camera description",lang:{_id:1,name:"English"}}],
    price:1000,
    dicount:10,
    imagesUrls:["https://picsum.photos/200/300"],
    categoryId:{_id:"1",name:'category_1'},
    tags:[{_id:1,name:'tag 1'},{_id:1,name:'tag 2'}],
    paymentTyps:[]
  };

  relatedProductsArray!: product[];
  // delproductdetails:itemAdded={item:this.productdetails.item,itemlength:0};
  
  ngOnInit(): void {

     this.activatedRoute.params.subscribe(
       
       (params)=>{
        //  console.log(params['productId']);
        const id = params['productId'];
         if(id){
          this.getProductById(id);
          this.getAllProducts();
        }
       },

     )
  }


  getProductById(id:string){
    this.productService.getProductById(id).subscribe(
      (res)=>{
        this.productdetails = res;
      }
    )
  }

  getAllProducts(){
    this.productService.getAllproducts().subscribe(
      (res)=>{
        this.relatedProductsArray = res.product.splice(6,20);
      }
    )
  }

  onaddtocartpressed(){
    this.productService.itemAddedfromservice.emit(this.productdetails);
  }


  deleteitem(){
    this.productService.itemdeletedfromservice.emit(this.productdetails);
    console.log(this.productdetails);
    
   }

}
