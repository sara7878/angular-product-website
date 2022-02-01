import { Component } from '@angular/core';
import { product } from './_models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-lab2';


  addedproducts :product[]=[];
  totalprice:number=0;
  totallength:number=0;
  itemlengtharray:number[]=[];

  // onItemadded(ev:product){
  //   let itemlength=1;
  //   const dublicated=this.addedproducts.find((ele)=>{
  //     return ele===ev;
  //   })
  //   if(!dublicated){
  //   this.addedproducts.push(ev)
  //   this.itemlengtharray.push(itemlength)
  //   }
  //   else{
  //     this.itemlengtharray[this.addedproducts.indexOf(ev)]++;
  //   }

  //   this.totalprice+=ev.dicount ? ev.price - ev.dicount : ev.price;
  //   this.totallength++;
  // }


  // deleteditemfromlist(ev:product){
  //     const indexofitem=this.addedproducts.indexOf(ev)
  //     const deletedprice=this.addedproducts[indexofitem]
  //     //decreament the total price
  //     this.totalprice -= (this.itemlengtharray[indexofitem])*(deletedprice.dicount?deletedprice.price - deletedprice.dicount : deletedprice.price)

  //     // //decreament the total length
  //     this.totallength -= this.itemlengtharray[indexofitem]

  //     // //delete the element from the array of elements
  //     this.addedproducts=this.addedproducts.filter((ele)=>{
  //       return ele!=ev;
  //     })

  //     // //delete the length of element from the array of length
  //       this.itemlengtharray.splice(indexofitem,1);

  // }
}
