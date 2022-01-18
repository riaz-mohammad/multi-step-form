import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button>
      <ng-content></ng-content>
      <svg>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M21.4453 0.278417L25.7996 6.32784C26.0668 6.69906 26.0668 7.30094 25.7996 7.67216L21.4453 13.7216C21.1781 14.0928 20.7449 14.0928 20.4777 13.7216C20.2105 13.3504 20.2105 12.7485 20.4777 12.3773L23.664 7.95058H0V6.04942H23.664L20.4777 1.62273C20.2105 1.25151 20.2105 0.64964 20.4777 0.278417C20.7449 -0.0928057 21.1781 -0.0928057 21.4453 0.278417Z"
        />
      </svg>
    </button>
  `,

  styles: [
    `
      :host {
        display: inline-block;
        width: 200px;
        height: 40px;
      }
      button {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        background: purple;
        color: white;
        border-radius: 40px;
        font-weight: bold;
        box-shadow: 0px 0px 0px 10px rgba(1, 6, 80, 0.1);
      }
      svg {
        width: 30px;
        height: 15px;
        fill: white;
      }
    `,
  ],
})
export class ButtonComponent {}
