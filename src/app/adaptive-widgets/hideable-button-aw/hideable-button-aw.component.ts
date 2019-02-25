import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AdaptationAction, AdaptationController, AdaptiveWidget} from 'cbaui';

@Component({
  selector: 'hideable-button-aw',
  templateUrl: './hideable-button-aw.component.html',
  styleUrls: ['./hideable-button-aw.component.css']
})
export class HideableButtonAWComponent extends AdaptiveWidget{

  @Input('namespace') namespace: string;
  @Input('icon') icon: string;
  @Input('label') label: string;
  @Output('click') onClick: EventEmitter<any> = new EventEmitter();

  visible: boolean = true;
  classes = {"hidden": false};

  constructor(ac: AdaptationController) {
    super(ac, "HideableButtonAW");
  }

  isVisible() {
    return this.visible;
  }

  adapt(action: AdaptationAction): void {
    switch (action.name) {
      case 'HIDE':
        this.visible = false;
        break;
      case 'SHOW':
        this.visible = true;
        break;
    }
  }
}
