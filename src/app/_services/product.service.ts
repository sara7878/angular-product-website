import { EventEmitter } from "@angular/core";
import { product ,itemAdded} from "../_models/product.model";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class ProductService{

    itemAddedfromservice:EventEmitter<any>= new EventEmitter<any>();
    itemdeletedfromservice:EventEmitter<any>= new EventEmitter<any>();
    
    // productArray:product[]=[
    //     {_id:1,
    //     data:[{_id:1,name:"photo camera",description:"photo camera description",lang:{_id:1,name:"English"}}],
    //     price:1000,
    //     dicount:10,
    //     imagesUrls:["https://picsum.photos/200/300"],
    //     category:{_id:1,name:'category_1'},
    //     tags:[{_id:1,name:'tag 1'},{_id:1,name:'tag 2'}],
    //     paymentTyps:[{_id : 1 , name:'visa'},{_id : 2 , name:'cash'}]
    // },
        
    //     {_id:2,        data:[{_id:1,name:"mobile phone",description:"photo camera description",lang:{_id:1,name:"English"}}],
    //     price:2000,dicount:10,imagesUrls:["https://picsum.photos/200/100"],
    //     category:{_id:1,name:'category_1'},
    //     tags:[{_id:1,name:'tag 1'},{_id:1,name:'tag 2'}],
    //     paymentTyps:[{_id : 1 , name:'visa'},{_id : 2 , name:'cash'}]},

    //     {_id:3,     data:[{_id:1,name:"labtop",description:"photo camera description",lang:{_id:1,name:"English"}}],
    //     price:10000,imagesUrls:["https://picsum.photos/200/200"],
    //     category:{_id:1,name:'category_1'},
    //     tags:[{_id:1,name:'tag 1'},{_id:1,name:'tag 2'}],
    //     paymentTyps:[{_id : 1 , name:'visa'},{_id : 2 , name:'cash'}]},

    //     {_id:4,       data:[{_id:1,name:" play station",description:"photo camera description",lang:{_id:1,name:"English"}}],
    //     price:7000,dicount:10,imagesUrls:["https://picsum.photos/200/50"],
    //     category:{_id:1,name:'category_1'},
    //     tags:[{_id:1,name:'tag 1'},{_id:1,name:'tag 2'}],
    //     paymentTyps:[{_id : 1 , name:'visa'},{_id : 2 , name:'cash'}]},

    //     {_id:5,     data:[{_id:1,name:"photo camera",description:"photo camera description",lang:{_id:1,name:"English"}}],
    //     price:900,dicount:10,imagesUrls:["https://picsum.photos/200/400"],
    //     category:{_id:1,name:'category_1'},
    //     tags:[{_id:1,name:'tag 1'},{_id:1,name:'tag 2'}],
    //     paymentTyps:[{_id : 1 , name:'visa'},{_id : 2 , name:'cash'}]},

    //     {_id:6,      data:[{_id:1,name:"iphone 12",description:"photo camera description",lang:{_id:1,name:"English"}}],
    //     price:20000,dicount:10,imagesUrls:["https://picsum.photos/200/500"],
    //     category:{_id:1,name:'category_1'},
    //     tags:[{_id:1,name:'tag 1'},{_id:1,name:'tag 2'}],
    //     paymentTyps:[{_id : 1 , name:'visa'},{_id : 2 , name:'cash'}]},

    //     {_id:7,     data:[{_id:1,name:"labtop",description:"photo camera description",lang:{_id:1,name:"English"}}],
    //     price:20000,imagesUrls:["https://picsum.photos/200/600"],
    //     category:{_id:1,name:'category_1'},
    //     tags:[{_id:1,name:'tag 1'},{_id:1,name:'tag 2'}],
    //     paymentTyps:[{_id : 1 , name:'visa'},{_id : 2 , name:'cash'}]},

    //     {_id:8,      data:[{_id:1,name:"play station",description:"photo camera description",lang:{_id:1,name:"English"}}],
    //     price:9000,dicount:10,imagesUrls:["https://picsum.photos/200/700"],
    //     category:{_id:1,name:'category_1'},
    //     tags:[{_id:1,name:'tag 1'},{_id:1,name:'tag 2'}],
    //     paymentTyps:[{_id : 1 , name:'visa'},{_id : 2 , name:'cash'}]},

    //     {_id:9,        data:[{_id:1,name:"photo camera",description:"photo camera description",lang:{_id:1,name:"English"}}],
    //     price:1000,dicount:10,imagesUrls:["https://picsum.photos/200/800"],
    //     category:{_id:1,name:'category_1'},
    //     tags:[{_id:1,name:'tag 1'},{_id:1,name:'tag 2'}],
    //     paymentTyps:[{_id : 1 , name:'visa'},{_id : 2 , name:'cash'}]},
     
    //     ]
    cartArray: itemAdded[]=[];
    totallength:number=0;
    totalprice:number=0;

    constructor(private httpClient : HttpClient){
        // this.itemAddedfromservice.subscribe()
    }

    getAllproducts():Observable<{product:product[],numberofProducts:number}>{
        const token: string = localStorage.getItem('token')!;
        const headers = new HttpHeaders({
          authorization: token
        })
       return this.httpClient.get<{product:product[],numberofProducts:number}>(environment.baseUrl+'product',{headers})
    }
    // getAllproducts():product[]{
    //     return this.productArray.slice()
    // }
    // getProductbyId(id:number):product|undefined{
    //     return this.productArray.find(i => i._id === id)
    // }
    // addProduct(product:product):void{

    //     this.productArray.push(product)
    // }

    getProductById(id: string): Observable<product> {
        
        return this.httpClient.get<product>(environment.baseUrl+'product/'+id)
      }

    // deleteProduct(id:number):product[]{
    //     return this.productArray.filter(item => item._id != id)
    // }

    addItemtocart(product:product):itemAdded[]{
        this.totallength++;
        let itemlength=1;
        const dublicated=this.cartArray.find((ele)=>{
        return ele.item===product;
        })

         if(!dublicated){
         this.cartArray.push({item:product,itemlength})
        }
         else{
             dublicated.itemlength++;
        }
        
        this.totalprice+=product.dicount ? product.price - product.dicount : product.price;

         return this.cartArray;

     }
    
     
    //  deleteitemfromcart(prod:itemAdded):void{
    //      if(this.totallength>0){
    //      this.totallength--;
    //     this.totalprice-=(prod.item.dicount ? prod.item.price - prod.item.dicount : prod.item.price);
        
    //     const itemdecrement = this.cartArray.find((ele)=>{
    //         return ele===prod;
    //         })

    //     if(itemdecrement && itemdecrement.itemlength>1){
    //         itemdecrement.itemlength--;
    //     }
    //     else{
    //         this.cartArray=this.cartArray.filter((ele)=>{
    //         return ele!=prod;
    //         })
    //     }
    // }

    // }

    deleteitemfromcart(prod:product):void{
        if(this.totallength>0){  

       const itemdecrement = this.cartArray.find((ele)=>{
           return ele.item===prod;
           })

       if(itemdecrement && itemdecrement.itemlength>1){
           itemdecrement.itemlength--;
           this.totallength--;
           this.totalprice-=(prod.dicount ? prod.price - prod.dicount : prod.price);

       }
       else{
           this.cartArray=this.cartArray.filter((ele)=>{
           return ele.item!=prod;
           })
           this.totallength--;
           this.totalprice-=(prod.dicount ? prod.price - prod.dicount : prod.price);

       }
   }

   }
    

}


