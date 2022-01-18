import { style, trigger, animate, transition } from '@angular/animations';
import { StepService } from '../step.service';
import { Component, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-progress',
  template: `
    <svg>
      <ellipse cx="40" cy="40" rx="30" ry="30" />
    </svg>
    <h5><ng-content></ng-content></h5>
  `,
  styles: [
    `
      :host {
        display: block;
        position: absolute;
        z-index: 100;
        right: 200px;
        bottom: 50px;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background: rgba(0, 0, 0, 0.2);
        box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.5);
        
        --rotate: 0;
        --color: purple;
      }

      h5 {
        position: absolute;
        top: 38%;
        left: 20px;
        width: 40px;
        color: white;
        display: flex;
        justify-content: center;
      }
      svg {
        width: 100%;
        height: 100%;
        stroke-width: 8px;
        fill: none;
        transform: rotate(-85deg);
        stroke-dasharray: 190;
        transition: all 800ms ease;
        stroke-dashoffset: var(--rotate);
        stroke: var(--color);
      }
    `,
  ],

  animations: [
    trigger('progress', [
      transition(':enter', [
        style({
          opacity: 0,
        }),

        animate(
          '1000ms 1000ms ease',
          style({
            opacity: 1,
          })
        ),
      ]),
    ]),
  ],
})
export class ProgressComponent {
  @HostBinding('@progress')
  runAnimation = true;
}
  
