import { Injectable } from '@angular/core';
import { ContextProvider, UpdateMethod } from 'cobaui';

@Injectable()
export class ExperienceCP extends ContextProvider{

  constructor() {
    localStorage.setItem("experience", "0");
    super(UpdateMethod.INTERVAL, 60000); // update every minute
    // restore last value and initialize context parameter
    const experience = parseInt(localStorage.getItem("experience") || "0");
    this.addContextParam({contextOfUse: 'user', key: 'experience', value: experience || 0});
    this.updateContext();
  }

  protected updateContext() {
    const experience = this.getContextParam('experience').value;
    this.modifyContextParam('experience', experience + 1);
    localStorage.setItem("experience", experience + 1);
    super.updateContext();
  }
}
