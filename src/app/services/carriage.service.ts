import {ElementRef, Injectable, ViewChild, Optional} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NumberValidator} from '../shared/number.validator';
import {LoggerService} from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class CarriageService {
  constructor(@Optional() loggerService: LoggerService) { }
  private value: any;

  manufacturerName: string;
  wagonNumber: string;
  condition: string;
  static wagonType: string;
  static wagonObj: any;

  notValide = true;

  @ViewChild('editSection') editSection: ElementRef;

  editName: any;
  editNumber: any;

  static addWagon(inputForm, wagons, types): void{
    LoggerService.log(arguments, this.addWagon.name);
    if (inputForm.value.number.toString().charAt(0) === '2'){
      this.wagonType = types.get('2');
    }

    else if (inputForm.value.number.toString().charAt(0) === '3'){
      this.wagonType = types.get('3');
    }

    else if (inputForm.value.number.toString().charAt(0) === '4'){
      this.wagonType = types.get('4');
    }

    else if (inputForm.value.number.toString().charAt(0) === '5'){
      this.wagonType = types.get('5');
    }

    else if (inputForm.value.number.toString().charAt(0) === '6'){
      this.wagonType = types.get('6');
    }

    else if (inputForm.value.number.toString().charAt(0) === '7'){
      this.wagonType = types.get('7');
    }

    else if (inputForm.value.number.toString().charAt(0) === '8'){
      this.wagonType = types.get('8');
    }

    else if (inputForm.value.number.toString().charAt(0) === '9'){
      this.wagonType = types.get('9');
    }

    this.wagonObj = {
      manufacturerName: inputForm.value.name,
      wagonNumber: inputForm.value.number,
      condition: inputForm.value.condition,
      wagonType: this.wagonType
    };

    wagons.push(this.wagonObj);
    inputForm.reset();
  }

  static deleteWagon(index, wagons): void{
    LoggerService.log(arguments, this.deleteWagon.name);
    wagons.splice(index, 1);
  }

  static updateWagon(index, editName, editNumber, editCondition, wagons, types): void{
    LoggerService.log(arguments, this.updateWagon.name);
    if (editNumber.toString().charAt(0) === '2'){
      wagons[index].wagonType = types.get('2');
    }

    else if (editNumber.toString().charAt(0) === '3'){
      wagons[index].wagonType = types.get('3');
    }

    else if (editNumber.toString().charAt(0) === '4'){
      wagons[index].wagonType = types.get('4');
    }

    else if (editNumber.toString().charAt(0) === '5'){
      wagons[index].wagonType = types.get('5');
    }

    else if (editNumber.toString().charAt(0) === '6'){
      wagons[index].wagonType = types.get('6');
    }

    else if (editNumber.toString().charAt(0) === '7'){
      wagons[index].wagonType = types.get('7');
    }

    else if (editNumber.toString().charAt(0) === '8'){
      wagons[index].wagonType = types.get('8');
    }

    else if (editNumber.toString().charAt(0) === '9'){
      wagons[index].wagonType = types.get('9');
    }
    wagons[index].manufacturerName = editName;
    wagons[index].wagonNumber = editNumber;
    wagons[index].condition = editCondition;
  }

}
