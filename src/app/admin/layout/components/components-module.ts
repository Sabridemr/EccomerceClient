import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from './header/header';
import { Sidebar } from './sidebar/sidebar';
import { Footer } from './footer/footer';
import { AppRoutingModule } from "../../../app-routing-module";



@NgModule({
  declarations: [
    Header,
    Sidebar,
    Footer
  ],
  imports: [
    CommonModule,
    AppRoutingModule
],
  exports: [
    Header,
    Sidebar,
    Footer
  ]
})
export class ComponentsModule { }
