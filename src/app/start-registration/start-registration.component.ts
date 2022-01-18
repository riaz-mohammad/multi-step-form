import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-registration',
  template: `
            <img src="../../assets/package.png"/>    
             <app-button (click)="navigate()">
                SEND YOUR PACKAGE
              </app-button>

          `,
  styles: [`
      :host {
        display: flex;
        flex-direction: column;
        gap: 50px;
        height: 100%;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
      }

      app-button{
        height: 50px;
        width: 250px;
      }

      img {
        border-radius: 30px;
        height: 100px;
      }

        
  `],
})
export class StartRegistrationComponent {
  constructor(private router: Router) {}

  navigate(): void {
    this.router.navigate(['/sender'])
  }
}

  

