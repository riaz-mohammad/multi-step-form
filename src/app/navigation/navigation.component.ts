import { trigger, transition, style, animate } from '@angular/animations';
import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-navigation',
  template: `
    <h6>SENDER</h6>
    <h6>RECEIVER</h6>
    <h6>CONFIRMATION</h6>
  `,
  styles: [
    `
      :host {

        display: flex;
        align-items: center;
        justify-content: space-around;
        height: 50px;
        width: 800px;
        border-radius: 20px;
        color: white;
        background: purple;
        box-shadow: 5px 0px 10px 0px rgba(0, 0, 0, 0.1);
        h6{
          width: 150px;
          display: flex;
          justify-content: center;
          letter-spacing: 1px;
        }

      }
    `,
  ],

  animations: [
    trigger('navigation', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateY(-50%)'
        }),

        animate('800ms 1000ms ease', style({
          opacity: 1,
          transform: 'translateY(0%)'
        }))
          
      ])
    ])
  ]
})
export class NavigationComponent {
  @HostBinding('@navigation')
  runAnimation = true;
}



