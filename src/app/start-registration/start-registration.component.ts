import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-registration',
  template: ` <app-button (click)="navigate()">SEND YOUR PACKAGE</app-button> `,
  styles: [`
      :host {
        display: flex;
        height: 100%;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
      }

      app-button{
        height: 50px;
        width: 250px;
        padding-bottom: 200px;
      }
        
  `],
})
export class StartRegistrationComponent {
  constructor(private router: Router) {}

  navigate(): void {
    this.router.navigate(['/sender'])
  }
}

  

