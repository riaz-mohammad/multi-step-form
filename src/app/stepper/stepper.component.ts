import { StepService } from './../step.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { stepper } from '../animations';

@Component({
  selector: 'app-stepper',
  template: `
      <app-step
        [@stepper]="{ value: '', params: { left: '270px' } }"
        [class.active]="step.stepOne$ | async"
        [appCurrent]="'sender'">1
      </app-step>

      <app-step-bar [class.active]="step.stepTwo$ | async"></app-step-bar>

      <app-step
        [@stepper]="{ value: '', params: { left: '0px' } }"
        [class.active]="step.stepTwo$ | async"
        [appCurrent]="'receiver'">2
        </app-step>
      <app-step-bar [class.active]="step.stepThree$ | async"></app-step-bar>

      <app-step
        [@stepper]="{ value: '', params: { left: '-270px' } }"
        [class.active]="step.stepThree$ | async"
        [appCurrent]="'confirmation'">3
      </app-step>

  `,
  styles: [
    `
      :host {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 600px;
        height: 10vh;

      }

      .active {
        transform: scale(1.1);
        opacity: 1;
      }
    `,
  ],

  animations: [stepper],
})
export class StepperComponent {
  constructor(public step: StepService) {}
}


