import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[redApp]'
})
export class CenterDirective {

  constructor(e: ElementRef) {
    e.nativeElement.style.color = 'red';
  }



}
