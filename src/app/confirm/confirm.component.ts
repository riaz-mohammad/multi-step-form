
import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-confirm',
  template: `
      <app-progress [style.--rotate]="rotate" [style.--color]="color">
        DONE
      </app-progress>
  `,
  styles: [
    `
      :host {
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 20px;
        border: 1px solid purple;
      }

      app-progress {
        left: 40%;
        top: 40%;
      }



    `,
  ],
})
export class ConfirmComponent implements OnInit {
  rotate = 190;
  color = 'transparent';

  ngOnInit(): void {
    timer(1400, 1000).pipe(
       take(1)
    ).subscribe(_ => {
      this.color = 'white',
      this.rotate = 0
    })
  }
}
