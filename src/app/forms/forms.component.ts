import { Component } from '@angular/core';

@Component({
  selector: 'app-forms',
  template: ` <ng-content></ng-content> `,
  styles: [
    `
      :host {
        box-sizing: border-box;
        position: relative;
        display: block;
        height: 500px;
        width: 400px;
      }
    `,
  ],
})
export class FormsComponent {}
