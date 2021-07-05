import { Directive, Input } from '@angular/core';
import { FormControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[CustomMin][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CustomMinDirective,
      multi: true,
    },
  ],
})
export class CustomMinDirective implements Validator {
  @Input() minimo!: number;

  validate(control: FormControl) {
    const inputvalue = control.value;
    return inputvalue < this.minimo ? { custommin: true } : null;
  }
}
