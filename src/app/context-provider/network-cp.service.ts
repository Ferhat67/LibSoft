import { Injectable } from '@angular/core';
import { ContextProvider, UpdateMethod } from 'cbaui';
import { HttpClient } from '@angular/common/http';

declare var window: any;

@Injectable()
export class NetworkCP extends ContextProvider{

  private currentIP: string = '127.0.0.1';

  constructor(private http: HttpClient) {
    // call base class constructor.
    super(UpdateMethod.EVENT_BASED);

    // listen for online / offline changes
    window.addEventListener('online', () => this.updateOnlineStatus());
    window.addEventListener('offline', () => this.updateOnlineStatus());
    this.addContextParam({contextOfUse: 'platform', key: 'online', value: window.navigator.onLine});

    // Initialize context parameter for ip
    this.addContextParam({contextOfUse: 'environment', key: 'ip', value: this.currentIP});
    this.updateContext();
    setInterval(() => this.checkIP(), 50000);
  }

  checkIP() {
    this.http.get<any>("https://ipinfo.io?token=5cd2ba78313611__").subscribe(data => {
      this.modifyContextParam('ip', data.ip);
      this.updateContext();
    });
  }

  updateOnlineStatus() {
    this.modifyContextParam('online', window.navigator.onLine);
    this.updateContext();
  }
}
