import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Products } from './products';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    Products
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: "", component: Products}
    ])

  ]
})
export class ProductsModule { }
