import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from './header/header';
import { Sidebar } from './sidebar/sidebar';
import { Footer } from './footer/footer';
import { AppRoutingModule } from "../../../app-routing-module";
import {MatListModule} from '@angular/material/list';



@NgModule({
  declarations: [
    Header,
    Sidebar,
    Footer
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatListModule
],
  exports: [
    Header,
    Sidebar,
    Footer
  ]
})
export class ComponentsModule { }
