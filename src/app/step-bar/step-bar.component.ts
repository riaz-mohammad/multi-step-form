import { animate, style, transition, trigger } from '@angular/animations';
import { Component, HostBinding } from '@angular/core';


@Component({
  selector: 'app-step-bar',
  template: ``,
  styles: [
    `
 :host {
        display: inline-block;
        width: 230px;
        height: 4px;
        background: purple;
        opacity: 0.4;
        transition: all 300ms ease;
      }
    `,
  ],

  animations: [
    trigger('stepBAr', [
      transition(':enter', [
        style({
          opacity: 0
        }),

        animate('1000ms 1000ms ease', style({
          opacity: 1
        }))
      ])
    ])
  ]
})
export class StepBarComponent {
  @HostBinding('@stepBAr')
   runAnimation = true;
}
