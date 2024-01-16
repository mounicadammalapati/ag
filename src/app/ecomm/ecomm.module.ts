import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EcommRoutingModule } from './ecomm-routing.module';
import { ProductComponent } from './product/product.component';



@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    EcommRoutingModule
  ]
})
export class EcommModule { }
