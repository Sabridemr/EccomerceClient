import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsModule } from './products/products-module';
import { DashboardModule } from './dashboard/dashboard-module';
import { OrdersModule } from './order/order-module';
import { CustomersModule } from './customer/customer-module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CustomersModule,
    OrdersModule,
    DashboardModule,
    ProductsModule
  ]
})
export class ComponentsModule { }
