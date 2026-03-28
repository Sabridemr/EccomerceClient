import { NgxSpinnerService } from "ngx-spinner";

export class Base {
  constructor(private spinner: NgxSpinnerService) {}

    showSpinner(spinnerNameType : SpinnerType) {
      this.spinner.show(spinnerNameType);
      setTimeout(() => 
        this.spinner.hide(spinnerNameType),3000);     
    }
    hideSpinner(spinnerNameType : SpinnerType) {
      this.spinner.hide(spinnerNameType)
    }
}

export enum SpinnerType {
  BallSpinClockwiseFadeRotating = "s1",
  BallScaleMultiple = "s2",
  BallAtom = "s3",

  
}
