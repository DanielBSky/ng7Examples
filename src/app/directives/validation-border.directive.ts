import {Directive, Input} from '@angular/core';

@Directive({
  selector: '[appValidationBorder]'
})
export class ValidationBorderDirective {
  private readonly colors: {
    VALID: string;
    INVALID: string;
    PENDING: string;
    DISABLED: string;
  };

  @Input('appValidationBorderWidth') borderWidth: string;
  @Input('appValidationBorderStyle') borderStyle: string;
}
