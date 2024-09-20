import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../../service/products.service";
import {Product} from "../../model/Product";
import {Router} from "@angular/router";
import {AppStateService} from "../../service/app-state.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{

  constructor(private productsService: ProductsService,
              private router:Router,
              public appState:AppStateService) { }

  ngOnInit() {
    this.searchProducts();
  }

  handleCheckProduct(product: Product) {
    this.updateProduct(product);
  }

  searchProducts() {

    /*this.appState.setProductState({
      status: 'LOADING'
    });*/
    this.productsService.searchProducts(
      this.appState.productState.keyword,
      this.appState.productState.currentPage,
      this.appState.productState.pageSize).subscribe({
        next: (resp) => {
          let products = resp.body as Product[];
          let totalProducts:number = parseInt(resp.headers.get('x-total-count')!);
          let totalPages= Math.floor(totalProducts / this.appState.productState.pageSize);
          if(totalProducts % this.appState.productState.pageSize != 0){
            ++totalPages;
          }
          this.appState.setProductState({
            products: products,
            totalProducts: totalProducts,
            totalPages: totalPages,
            status: 'LOADED'

          })
        },
        error: (error) => {
          console.log(error);
          this.appState.setProductState({
            status: 'ERROR',
            errorMessage: 'Error loading products: '+error,
          });
        }
    });
  }

  updateProduct(product: Product) {
    this.productsService.updateProduct(product).subscribe({
      next: (updatedProduct:Product) => {
        product.checked = updatedProduct.checked;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  deleteProduct(product: Product) {

    if(confirm("Are you sure you want to delete " + product.name + "?")) {
      this.productsService.deleteProduct(product).subscribe({
        next: () => {
          this.appState.productState.products = this.appState.productState.products.filter(
            (p:any) => p.id !== product.id);
          this.searchProducts()
        },
        error: (error) => {
          console.error(error);
        }
      });
    }
  }

  handleGoToPage(page: number) {
    this.appState.productState.currentPage = page;
    this.searchProducts();
  }

  editProduct(product: Product) {
      this.router.navigate([`/admin/edit-product/${product.id}`]);
  }
}
