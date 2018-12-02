import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appYellow]'
})
export class YellowDirective {

  constructor(e: ElementRef) {
    e.nativeElement.style.fontSize = '30px';
  }

}
