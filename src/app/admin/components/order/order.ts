import { Component } from '@angular/core';
import e from 'express';
import { NgxSpinnerService } from 'ngx-spinner';
import { Base, SpinnerType } from '../../../base/base';

@Component({
  selector: 'app-order',
  standalone: false,
  templateUrl: './order.html',
  styleUrl: './order.css',
})
export class Order extends Base {
  constructor( spinner: NgxSpinnerService) {
    super(spinner);
  }  

  ngOnInit(): void {
    this.showSpinner(SpinnerType.BallScaleMultiple);

    

  }
}