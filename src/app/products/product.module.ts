import { NgModule } from '@angular/core';
import { ProductListsComponenet } from './product-list.componenet';
import { ProductDetailComponent } from './product-detail.component';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [ProductListsComponenet, 
    ProductDetailComponent],
  imports: [
    RouterModule.forChild([
      {
      path:'products', component: ProductListsComponenet},
    { path:'products/:id',
      canActivate:[ProductDetailGuard],
    component:ProductDetailComponent}
  ] ),
    SharedModule
  ]
})
export class ProductModule { }
