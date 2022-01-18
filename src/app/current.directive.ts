import { Directive, HostBinding, Input } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[appCurrent]'
})
export class CurrentDirective {
  
  constructor(private router: Router) { }
  @Input() appCurrent!: string;
  @HostBinding('style.outline')
  get outline(): string {
    return (
       '/' + this.appCurrent === this.router.url ?
        '1px solid white' : ''
    );
  }

  
}
