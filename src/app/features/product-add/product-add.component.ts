import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/_models/category.model';
import { PaymentType } from 'src/app/_models/paymenttype.model';
import { itemAdded, product } from 'src/app/_models/product.model';
import { CategoryService } from 'src/app/_services/category.service';
import { PaymentMethodsService } from 'src/app/_services/payment-methods.service';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {

  categories!:Category[];
  paymentTypes!:PaymentType[];

  productadded :product={_id:1,
    data:[{_id:1,name:"photo camera",description:"photo camera description",lang:{_id:1,name:"English"}}],
    price:1000,
    dicount:10,
    imagesUrls:["https://picsum.photos/200/300"],
    categoryId:{_id:"1",name:'category_1'},
    tags:[{_id:1,name:'tag 1'},{_id:1,name:'tag 2'}],
    paymentTyps:[]
};


  constructor(private CategoryService:CategoryService , private paymentMethodservice:PaymentMethodsService , private routetohome:Router) { }

  ngOnInit(): void {
    this.categories=this.CategoryService.getAllCategories();
    this.paymentTypes=this.getAllpaymentTypes();
    // this.productadded.price=50;
  
  }
  getAllpaymentTypes():PaymentType[]{
    return this.paymentMethodservice.getAllpaymentMethods()
  }

  onCheckboxchanged(i:number){
    this.productadded.paymentTyps.push(this.paymentTypes[i])
    console.log(this.productadded)
  }
  onFormSubmit(form:any):void{
    this.routetohome.navigateByUrl('')
    console.log(form);
    
  }
}
