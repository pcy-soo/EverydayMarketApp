import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[validateCountry]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ValidatorDirective, multi: true }]
})
export class ValidatorDirective implements Validator {
  @Input() validateCountry!: boolean;

  validate(control: AbstractControl): ValidationErrors | null {
    return this.validateCountry && control.value !== 'Canada' ? { countryInvalid: true } : null;
  }
}
