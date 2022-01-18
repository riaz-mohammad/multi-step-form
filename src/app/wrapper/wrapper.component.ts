import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  template: `
    <ng-content ></ng-content>
    
  `,
  styles: [`
     :host {
       display: flex;
       flex-direction: column;
       align-items: center;
       justify-content: space-between;
       width: 800px;
       height: 150px;
     }
  `]
})
export class WrapperComponent {}


