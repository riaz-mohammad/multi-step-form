import { Component, Input, OnInit, ViewChild, ElementRef, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';




@Component({
  selector: 'app-input',
  template: ` <input [placeholder]="placeholder" [formControl]="inputValue" #input /> `,
  styles: [
    `
      :host {
        display: block;
        height: 50px;
        width: 250px;
        color: white;
      }

      input {
        height: 100%;
        width: 100%;
        outline: none;
        border: none;
        background: transparent;
        color: inherit;
        transition: all 300ms ease;
        border-bottom: 1px solid rgba(255, 255, 255, 0.3);

        &:focus {
          border-bottom-color: white;
        }
      }
    `,
  ],

  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements OnInit, ControlValueAccessor {
  @Input() placeholder!: string;
  @Input() focus!: boolean;
  @ViewChild('input', { static: true }) input!: ElementRef<HTMLInputElement>;
  inputValue = new FormControl();
  constructor() { }

  valueChanged(value: string): void { };

  writeValue(value: string): void {
    this.inputValue.setValue(value);
  }
  registerOnChange(fn: any): void {
    this.valueChanged = fn;
  }
  registerOnTouched(fn: any): void {}

  ngOnInit() {
    if (this.focus) {
      this.input.nativeElement.focus();
    }

    this.inputValue.valueChanges
      .subscribe(value => this.valueChanged(value));
    
  }
}
