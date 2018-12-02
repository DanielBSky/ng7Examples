import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(private el: ElementRef) { }

  isTrue: boolean = true;

  @HostListener('mouseover') onMouseEnter() {
    if(this.isTrue) {
      this.highlight('yellow');
      this.isTrue = false;
    } else {
      this.highlight(null);
      this.isTrue = true;
    }

  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
