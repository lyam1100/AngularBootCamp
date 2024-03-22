import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[capitalize]'
})
export class CapitalizeDirectiveDirective {

  public constructor(private el:ElementRef) {
    this.el.nativeElement.style.textTransform = 'uppercase';
  }
}
