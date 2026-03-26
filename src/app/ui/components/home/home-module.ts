import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Home } from './home';
import { Router } from 'express';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    Home
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: Home}
    ])
  ]
})
export class HomeModule { }
