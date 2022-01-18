import { StepService } from './step.service';
import { Router, RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { routeAnimations } from './animations';

@Component({
  selector: 'app-root',
  template: `

    
      <app-wrapper>
        <ng-container *ngIf="router.url !== '/registration'">
          <app-navigation></app-navigation>
          <app-stepper></app-stepper>
          <app-progress
            [style.--rotate]="0"
            [style.--color]="'rgba(71, 31, 71, 0.521)'">
          </app-progress>
          <app-progress
            [style.--rotate]="step.percent$ | async"
            [style.--color]="'purple'">
            {{ step.progress$ | async }}
          </app-progress>
        </ng-container>
      </app-wrapper>
          
    <app-forms [@routeAnimations]="routeAnimation(outlet)">
      <router-outlet #outlet="outlet"></router-outlet>
    </app-forms>

  `,
  styles: [
    `
      :host {

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        gap: 2rem;
        box-sizing: border-box;
      }
        

    `,
  ],

  animations: [routeAnimations],
})
export class AppComponent {
  constructor(public step: StepService, public router: Router) {}

  routeAnimation(outlet: RouterOutlet): string {
    return outlet?.activatedRouteData?.['animation'];
  }
}
