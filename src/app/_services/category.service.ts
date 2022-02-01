import { Injectable } from '@angular/core';
import { Category } from '../_models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
categories:Category[]=[
  {_id:"1",name:"Arts & Crafts"},
  {_id:"2",name:"Automotive"},
  {_id:"3",name:"Baby"},
  {_id:"4",name:"Books"},  
  {_id:"5",name:"Eletronics"},
  {_id:"6",name:"Women's Fashion"},  
  {_id:"7",name:"Men's Fashion"},
  {_id:"8",name:"Health & Household"},  
  {_id:"9",name:"Home & Kitchen"},
  {_id:"10",name:"Military Accessories"},  
  {_id:"11",name:"Eletronics"},
  {_id:"12",name:"Movies & Television"},  
  {_id:"13",name:"Sports & Outdoors"},
  {_id:"14",name:"Toys & Games"},

]


  constructor() { }

  getAllCategories():Category[]{
    return this.categories.splice(0);
  }

  getCategoryById(id:string):Category|undefined{
    return this.categories.find(categorie => categorie._id === id)
  }
}
