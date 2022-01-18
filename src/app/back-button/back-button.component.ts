import { Component, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';
import { StepService } from '../step.service';

@Component({
  selector: 'app-back-button',
  template: `
    <svg >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.67502 14.7374L1.2947 8.70395C0.903171 8.33371 0.901665 7.73184 1.29133 7.35964L7.64138 1.29431C8.03105 0.92211 8.66434 0.920526 9.05586 1.29077C9.44739 1.66101 9.4489 2.26288 9.05923 2.63508L4.41256 7.07341L39.005 6.98686L39.0097 8.888L4.41731 8.97456L9.08614 13.3896C9.47766 13.7598 9.47917 14.3617 9.0895 14.7339C8.69983 15.1061 8.06654 15.1077 7.67502 14.7374Z"
        stroke-width="2"
      />
    </svg>

    <button>Back</button>
  `,
  styles: [
    `
      :host {
        position: absolute;
        z-index: 100;
        top: 20px;
        left: 20px;
        display: flex;
        gap: 5px;
        height: 20px;
        width: 80px;
        align-items: center;
        cursor: pointer;
        svg {
          fill: white;
          width: 20px;
          height: 18px;
        }

        button {
          background: none;
          color: white;
          font-weight: bold;
        }
      }
    `,
  ],
})
export class BackButtonComponent {
  @Input() backPath!: string;
  constructor(public router: Router, public step: StepService) {}

  @HostListener('click')
  onClick(): void {
    this.router.navigate([`${this.backPath}`]);
    if (this.backPath === '/sender') {
      this.step.stepTwo(false);
      this.step.progress('0%', 190);
    } else if (this.backPath === '/receiver') {
      this.step.stepThree(false);
      this.step.progress('50%', 95);
    } 
  }
}