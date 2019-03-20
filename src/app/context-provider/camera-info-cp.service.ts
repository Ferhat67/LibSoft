import { Injectable } from '@angular/core';
import { ContextProvider, UpdateMethod } from 'cobaui';

declare var navigator: any;

@Injectable()
export class CameraInfoCP extends ContextProvider{
  constructor() {
    super(UpdateMethod.EVENT_BASED);

    this.addContextParam({ contextOfUse: 'platform', key: 'cameraAvailable', value: false });
    // check if device has a camera
    navigator.mediaDevices.getUserMedia({video: true})
      .then(() => {
        // camera available
        this.modifyContextParam('cameraAvailable', true);
        this.updateContext();
      })
      .catch(() => {
        this.modifyContextParam('cameraAvailable', false);
        this.updateContext();
      });
  }
}
