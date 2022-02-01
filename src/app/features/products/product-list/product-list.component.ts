import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { itemAdded, product } from 'src/app/_models/product.model';
import { AuthService } from 'src/app/_services/auth.service';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  productArray:product[]=[]

  // productService= new ProductService();

// @Output()
// itemaddedfromproductlistcomponent:EventEmitter<product>=new EventEmitter<product>();

  constructor(private productserviceobj:ProductService , private authservice:AuthService) { }

  ngOnInit(): void {
    this.getAllproducts();
  }

  getAllproducts(){
    this.productserviceobj.getAllproducts().subscribe(
      (res)=>{
        this.productArray=res.product;
        
      },
      (err)=>{
        console.log(err);
      },
      ()=>{}
    );

  const usertest = {
    email: 'teesthamaada@hamada.com',
    password: '12345678',
  }


  this.authservice.login(usertest).subscribe(
    (res)=>{
      localStorage.setItem('token', res.token)
    }
  )

}
  // onItemadded(ev:product){
  //   this.itemaddedfromproductlistcomponent.emit(ev)
  // }



}
