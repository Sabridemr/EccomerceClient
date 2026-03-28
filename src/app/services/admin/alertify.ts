import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
declare var alertify: any;

@Injectable({
  providedIn: 'root',
})
export class Alertify {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  message(message:string,options: Partial<AlertifyOptions>) {
    if (isPlatformBrowser(this.platformId)) {
      alertify.set('notifier', 'delay', options.delay);
      alertify.set('notifier', 'position', options.position);
      const msj = alertify[options.messsageType](message);
      if(options.dismissOthers){
        msj.dismissOthers();
      }
    }
  }

  dismiss() {
    if (isPlatformBrowser(this.platformId)) {
      alertify.dismissAll();
    }
  }
}


export class AlertifyOptions {
  messsageType: MessageType = MessageType.Message;
  position: Position = Position.TopCenter;
  delay: number = 3;
  dismissOthers: boolean = false;
}


export enum MessageType {
  Error = 'error',
  Success = 'success',
  Warning = 'warning',
  Message = 'message',
  Notify = 'notify',
}

export enum Position {
  TopRight = 'top-right',
  TopLeft = 'top-left',
  BottomRight = 'bottom-right',
  BottomLeft = 'bottom-left',
  TopCenter = 'top-center',
  BottomCenter = 'bottom-center',
}

