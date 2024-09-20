import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { AddProductsComponent } from './components/add-products/add-products.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ErrorHandlerComponent } from './components/error-handler/error-handler.component';
import {appHttpInterceptor} from "./service/app-http.interceptor";
import { LoginComponent } from './components/login/login.component';
import { AdminTemplateComponent } from './components/admin-template/admin-template.component';
import { NoAuthorizedComponent } from './components/no-authorized/no-authorized.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    AddProductsComponent,
    EditProductComponent,
    DashboardComponent,
    NavbarComponent,
    ErrorHandlerComponent,
    LoginComponent,
    AdminTemplateComponent,
    NoAuthorizedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
