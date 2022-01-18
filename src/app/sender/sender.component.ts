import { Component } from '@angular/core';

@Component({
  selector: 'app-sender',
  template: `
    <app-form path="receiver" formType="sender">
      <h4 header>Sender Information</h4>
      <p button>NEXT</p>
    </app-form>   
  `,
  styles: [],
})
export class SenderComponent {}