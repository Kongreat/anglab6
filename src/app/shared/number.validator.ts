import {AbstractControl} from '@angular/forms';

function numberValidator(control: AbstractControl): {[key: string]: any}{
  const numb = /admin/.test(control.value);
  return numb ? {'number': {value: control.value}} : null;
}
