import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';
import { productService } from './product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle:string= 'Product Detail';
  errorMessage:string ='';
  product: IProduct | undefined;
  imageWidth: number = 50;
   imageMargin: number = 2;
   
  constructor( private route: ActivatedRoute,
    private router:Router,
    private _productService: productService
    ){}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pageTitle += ` ${id}`;
    if(id)
    {
     this.getproduct(id) ;   
    }  
  }
  getproduct(id:number):void{

  this._productService.getProduct(id).subscribe(
    { next: product=> this.product = product,
      error: err=> this.errorMessage=err
   });

  }
  onBack():void{
    this.router.navigate(['/products']);

  }

}
