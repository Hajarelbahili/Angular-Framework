import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ProductsComponent} from "./components/products/products.component";
import {AddProductsComponent} from "./components/add-products/add-products.component";
import {EditProductComponent} from "./components/edit-product/edit-product.component";
import {LoginComponent} from "./components/login/login.component";
import {AdminTemplateComponent} from "./components/admin-template/admin-template.component";
import {NoAuthorizedComponent} from "./components/no-authorized/no-authorized.component";
import {Auth} from "./guards/auth.guard";
import {Authori} from "./guards/authori.guard";


const routes: Routes = [
  {path:'',redirectTo:'/login', pathMatch:'full'},
  {path:'admin', component: AdminTemplateComponent,canActivate:[Auth] ,children:[
      {path:'products', component: ProductsComponent},
      {path:'add-product', component: AddProductsComponent, canActivate:[Authori],
        data:{requiredRoles:['ADMIN']}
      },
      {path:'edit-product/:id', component: EditProductComponent, canActivate:[Authori],
        data:{requiredRoles:['ADMIN']}
      },
      {path:'not-authorize', component: NoAuthorizedComponent},
      {path:'home', component: HomeComponent},
    ]},
  {path:'login', component: LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
