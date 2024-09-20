import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductsService} from "../../service/products.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrl: './add-products.component.css'
})
export class AddProductsComponent implements OnInit{

  public productForm!: FormGroup;

  constructor(private fb: FormBuilder,private productsService: ProductsService,private router:Router) {
  }

  ngOnInit() {
    this.productForm = this.fb.group({
      name: this.fb.control('', Validators.required),
      price: this.fb.control('',Validators.required),
      checked: this.fb.control(false)
    });
  }


  AddProduct() {
    let product = this.productForm.value;
    this.productsService.addProduct(product).subscribe({
      next: (product) => {
        console.log(product);
        this.productForm.reset();
        this.router.navigate(['/admin/products']);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
}
