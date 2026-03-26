import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from './header/header';
import { Sidebar } from './sidebar/sidebar';
import { Footer } from './footer/footer';



@NgModule({
  declarations: [
    Header,
    Sidebar,
    Footer
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Header,
    Sidebar,
    Footer
  ]
})
export class ComponentsModule { }
