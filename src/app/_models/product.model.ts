import { TagOpenStartToken } from "@angular/compiler/src/ml_parser/tokens";
import { Category } from "./category.model";
import { PaymentType } from "./paymenttype.model";
import { ProductLang } from "./product-lang.model";
import { Tag } from "./tags.model";

export interface product{
    _id:number,
    data:ProductLang[],
    price:number,
    dicount?:number,
    imagesUrls:string[],
    categoryId:Category,
    paymentTyps:PaymentType[],
    tags:Tag[];
}

export interface itemAdded{
    item:product,
    itemlength:number,
    
}