import { Injectable } from '@angular/core';
import {FormControl} from '@angular/forms';

@Injectable()
export class CarriageValidatorService {

  constructor() { }


   validateNumber(control: FormControl): {[s: string]: boolean}{
    let allGood: boolean;

    const numb = control.value.toString();

    let sum: number;
    let pr1: number;
    let pr2: number;
    let pr3: number;
    let pr4: number;
    let pr5: number;
    let pr6: number;
    let pr7: number;

    pr1 = parseInt(numb.charAt(0), 10) * 2;
    pr2 = parseInt(numb.charAt(1), 10);
    pr3 = parseInt(numb.charAt(2), 10) * 2;
    pr4 = parseInt(numb.charAt(3), 10);
    pr5 = parseInt(numb.charAt(4), 10) * 2;
    pr6 = parseInt(numb.charAt(5), 10);
    pr7 = parseInt(numb.charAt(6), 10) * 2;

    sum = 0;
    if ((pr1.toString().length) === 1){
      sum += parseInt((pr1.toString().charAt(0)), 10);
    }
    else{
      sum += parseInt((pr1.toString().charAt(0)), 10) + parseInt((pr1.toString().charAt(1)), 10);
    }

    // second pr
    if ((pr2.toString().length) === 1){
      sum += parseInt((pr2.toString().charAt(0)), 10);
    }
    else{
      sum += parseInt((pr2.toString().charAt(0)), 10) + parseInt((pr2.toString().charAt(1)), 10);
    }

    if ((pr3.toString().length) === 1){
      sum += parseInt((pr3.toString().charAt(0)), 10);
    }
    else{
      sum += parseInt((pr3.toString().charAt(0)), 10) + parseInt((pr3.toString().charAt(1)), 10);
    }

    if ((pr4.toString().length) === 1){
      sum += parseInt((pr4.toString().charAt(0)), 10);
    }
    else{
      sum += parseInt((pr4.toString().charAt(0)), 10) + parseInt((pr4.toString().charAt(1)), 10);
    }

    if ((pr5.toString().length) === 1){
      sum += parseInt((pr5.toString().charAt(0)), 10);
    }
    else{
      sum += parseInt((pr5.toString().charAt(0)), 10) + parseInt((pr5.toString().charAt(1)), 10);
    }

    if ((pr6.toString().length) === 1){
      sum += parseInt((pr6.toString().charAt(0)), 10);
    }
    else{
      sum += parseInt((pr6.toString().charAt(0)), 10) + parseInt((pr6.toString().charAt(1)), 10);
    }

    if ((pr7.toString().length) === 1){
      sum += parseInt((pr7.toString().charAt(0)), 10);
    }
    else{
      sum += parseInt((pr7.toString().charAt(0)), 10) + parseInt((pr7.toString().charAt(1)), 10);
    }

    // console.log(sum);
    // console.log(Math.ceil(sum / 10) * 10);
    if (((Math.ceil(sum / 10) * 10) - (parseInt(numb.charAt(7), 10))) === sum){
      allGood = true;
      console.log(true);
    }
    else{
      allGood = false;
    }

    if (allGood === true){
      return null;
    }

    else{
      return {allGood: true};
    }

  }
}
