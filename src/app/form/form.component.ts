import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { StepService } from '../step.service';

@Component({
  selector: 'app-form',
  template: `
    <form [formGroup]="formData" (ngSubmit)="submit()">
      <ng-content select="[header]"></ng-content>
      <app-input formControlName="name" placeholder="name" [focus]="true"></app-input>
      <app-input formControlName="surname" placeholder="surname"></app-input>
      <app-input formControlName="city" placeholder="city"></app-input>
      <app-input formControlName="country" placeholder="country"></app-input>
      <app-button type="submit">
        <ng-content select="[button]"></ng-content>
      </app-button>
    </form>
  `,
  styles: [
    `
      :host {
        display: block;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.3);
        box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.2);
        border-radius: 20px;
      }

      form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        width: 100%;
        height: 100%;
        border-radius: 10px;
        color: white;
      }
    `,
  ],
})
export class FormComponent implements OnInit{
  @Input() path!: string;
  @Input() formType!: string;
  constructor(
    private router: Router,
    private form: FormBuilder,
    private step: StepService,
  ) {}

  formData: FormGroup = this.form.group({
    name: [''],
    surname: [''],
    city: [''],
    country: [''],
  });

  submit(): void {
    this.step.saveFormData(this.formType, this.formData.value);
    this.router.navigate([`${this.path}`]);
    if (this.path === 'confirmation') {
      this.step.progress('100%', 0);
    } else if (this.path === 'receiver') {
      this.step.progress('50%', 90);
    } else {
      this.step.progress('0%', 190);
    }
  }


  ngOnInit() {
    this.step.getFormData(this.formType).pipe(
      take(1)
    ).subscribe(data => this.formData.setValue(data));
  }
}
