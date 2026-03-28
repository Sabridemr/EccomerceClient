import { Component } from '@angular/core';
import { Base, SpinnerType } from '../../../base/base';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-baskets',
  standalone: false,
  templateUrl: './baskets.html',
  styleUrl: './baskets.css',
})
export class Baskets extends Base {
  constructor(spinner: NgxSpinnerService) {
    super(spinner);
  }
  ngOnInit(): void {
    this.showSpinner(SpinnerType.BallSpinClockwiseFadeRotating);
  }

}
