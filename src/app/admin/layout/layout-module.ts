import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Layout } from './layout';
import { ComponentsModule } from './components/components-module';



@NgModule({
  declarations: [
    Layout
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    
    
  ],
  exports: [
    Layout,
    
  ]
})
export class LayoutModule { }
