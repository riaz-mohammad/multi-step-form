
import { Component} from '@angular/core';

@Component({
  selector: 'app-step',
  template: ` <h4><ng-content></ng-content></h4> `,
  styles: [
    `
      :host {
        position: relative;
        z-index: 100;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: purple;
        opacity: 0.4;
        color: white;
        transition: all 300ms ease;
        box-shadow: 5px 0px 10px 0px rgba(0, 0, 0, 0.1);
      }
    `,
  ],
})
export class StepComponent {}
