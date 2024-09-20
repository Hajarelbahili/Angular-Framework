import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductsService} from "../../service/products.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Product} from "../../model/Product";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent implements OnInit{

  constructor(private activatedRoute: ActivatedRoute,
              private router:Router,
              private productService: ProductsService,
              private fb:FormBuilder) {
  }

  productId!:number;
  productFormGroup! : FormGroup;


  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.params['id'];
    this.productService.getProductById(this.productId).subscribe({
      next:(product)=>{
        this.productFormGroup=this.fb.group({
          id: this.fb.control(product.id),
          name: this.fb.control(product.name, Validators.required),
          price: this.fb.control(product.price, [Validators.required]),
          checked: this.fb.control(product.checked),
        })
      },
      error:err => {
        console.error(err)
      }
    })
  }

  editProduct(productId:number) {
    let product:Product = this.productFormGroup.value;
    this.productService.editProduct(productId,product).subscribe({
      next:(product)=>{
        alert(`${product.id} is updated`)
        this.router.navigate(['/admin/products'])
      },
      error:(err)=>{
        console.error(err)
      }
    })
  }
}
