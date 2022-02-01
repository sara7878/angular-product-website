import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ProductAddComponent } from './features/product-add/product-add.component';
import { ProductDetailsComponent } from './features/products/product-details/product-details.component';
import { ProductListContainerComponent } from './features/products/product-list-container/product-list-container.component';
import { TopNavbarComponent } from './layout/top-navbar/top-navbar.component';
import { LoginComponent } from './login-register/login/login.component';
import { RegisterComponent } from './login-register/register/register.component';

const routes: Routes = [
  {path:'home' , component : ProductListContainerComponent} ,
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path: 'product', children:[
    {path: 'details/:productId', component: ProductDetailsComponent},
    {path: 'add', component: ProductAddComponent},
  ]},
  {path:'login' , component : LoginComponent} , 
  {path:'register' , component : RegisterComponent} ,
  {path:'aboutus' , component : AboutusComponent} ,

  {path:'**' , component:TopNavbarComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
