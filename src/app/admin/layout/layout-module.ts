import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Layout } from './layout';
import { ComponentsModule } from './components/components-module';
import { AppRoutingModule } from "../../app-routing-module";



@NgModule({
  declarations: [
    Layout
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    AppRoutingModule
],
  exports: [
    Layout,
    
  ]
})
export class LayoutModule { }
