import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { productService } from "./product.service";

@Component({
   selector: 'pm-products',
   templateUrl: './product-list.componenet.html',
   styleUrls: ['./product-list.componenet.css']

})
export class ProductListsComponenet implements OnInit {
   pageTitle: string = " Product List";
   imageWidth: number = 50;
   imageMargin: number = 2;
   showImage: boolean = false;
   filterdProducts: IProduct[] = [];
   errorMessage: string = '';
   products: IProduct[] = [];

   private _listFilter: string = '';
   get listFilter(): string {
      return this._listFilter;
   }
   set listFilter(value: string) {
      this._listFilter = value;
      this.filterdProducts = this.performFilter(value)

   }
   performFilter(filterBY: string): IProduct[] {
      filterBY = filterBY.toLocaleLowerCase();
      return this.products.filter((product: IProduct) =>
         product.productName.toLocaleLowerCase().includes(filterBY));
   }
   constructor(private _productService: productService) {}

   ngOnInit(): void {

      this._productService.getProducts().subscribe({
         next: products => {
            this.products = products;
            this.filterdProducts = this.products;

         },
         error: err => this.errorMessage = err

      });

   }
   toggleImage(): void {
      this.showImage = !this.showImage;

   }

}