import { FormControl } from '@angular/forms';
import { StepService } from '../step.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  template: `
    <app-back-button backPath="/receiver"></app-back-button>
    <h6>Enter Your Mobile Number to Receive The Tracking Number in SMS.</h6>
    <app-input [formControl]="control" placeholder="Number" [focus]="true">
    </app-input>
    <app-button (click)="navigate()">CONFIRM</app-button>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 50px;
        width: 100%;
        height: 100%;
        position: relative;
        border-radius: 20px;
        background: rgba(0, 0, 0, 0.3);
        box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.2);
      }

      h6 {
        width: 70%;
        line-height: 1.5;
        color: white;
      }
    `,
  ],
})
export class ConfirmationComponent {
  control = new FormControl();
  constructor(private step: StepService, private router: Router) {
    this.step.stepThree(true);
  }

  navigate(): void {
     this.router.navigate(['/confirm']);
  }
}
