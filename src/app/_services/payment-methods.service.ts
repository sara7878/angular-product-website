import { Injectable } from '@angular/core';
import { PaymentType } from '../_models/paymenttype.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentMethodsService {

  paymentMethods:PaymentType[]=[
    {_id:1,name:'visa'},    
    {_id:1,name:'MasterCard'},    
    {_id:1,name:'American Express'},    
    {_id:1,name:'paypal'},    
    {_id:1,name:'cash'},
  ]


  constructor() { }

  getAllpaymentMethods():PaymentType[]{
    return this.paymentMethods.splice(0)
  }
  
}
