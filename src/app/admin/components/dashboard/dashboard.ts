import { Component, OnInit } from '@angular/core';
import { Base, SpinnerType } from '../../../base/base';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard extends Base implements OnInit {

 constructor(spinner: NgxSpinnerService) {
   super(spinner);
 }

  ngOnInit(): void {
    this.showSpinner(SpinnerType.BallSpinClockwiseFadeRotating);
     
  }

}
