import { StepService } from '../step.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receiver',
  template: `
    <app-back-button backPath="/sender"></app-back-button>
    <app-form path="confirmation" formType="receiver">
      <h4 header>Receiver Information</h4>
      <p button>NEXT</p>
    </app-form>
  `,
  styles: [
    `
      :host {
        position: relative;
      }
    `,
  ],
})
export class ReceiverComponent {
  constructor(public step: StepService) {
    this.step.stepTwo(true);
  }
}
