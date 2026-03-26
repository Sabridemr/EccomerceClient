import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Baskets } from './baskets';
import { Router } from 'express';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    Baskets
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: Baskets}
    ])
  ]
})
export class BasketsModule { }
