import {ElementRef, Injectable, ViewChild, Optional} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NumberValidator} from '../shared/number.validator';
import {LoggerService} from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class CarriageService {
  constructor(private loggerService: LoggerService) { }

  wagons = [];

  types = new Map([
    ['2', 'kritii'],
    ['3', 'prochie'],
    ['4', 'platforma'],
    ['5', 'sobstvennie'],
    ['6', 'polyvagon'],
    ['7', 'cisterna'],
    ['8', 'isoterm'],
    ['9', 'prochie']
  ]);

  getWagons(): any[]{
    this.loggerService.log(arguments, this.getWagons.name);
    return this.wagons;
  }

  addNewWagon(obj): void{
    this.loggerService.log(arguments, this.addNewWagon.name);
    if (obj.wagonNumber.toString().charAt(0) === '2'){
      obj.wagonType = this.types.get('2');
    }

    else if (obj.wagonNumber.toString().charAt(0) === '3'){
      obj.wagonType = this.types.get('3');
    }

    else if (obj.wagonNumber.toString().charAt(0) === '4'){
      obj.wagonType = this.types.get('4');
    }

    else if (obj.wagonNumber.toString().charAt(0) === '5'){
      obj.wagonType = this.types.get('5');
    }

    else if (obj.wagonNumber.toString().charAt(0) === '6'){
      obj.wagonType = this.types.get('6');
    }

    else if (obj.wagonNumber.toString().charAt(0) === '7'){
      obj.wagonType = this.types.get('7');
    }

    else if (obj.wagonNumber.toString().charAt(0) === '8'){
      obj.wagonType = this.types.get('8');
    }

    else if (obj.wagonNumber.toString().charAt(0) === '9'){
      obj.wagonType = this.types.get('9');
    }

    this.wagons.push(obj);
  }

  deleteWagon(index, wagons): void{
    this.loggerService.log(arguments, this.deleteWagon.name);
    wagons.splice(index, 1);
  }

  updateWagon(index, obj): void{
    this.loggerService.log(arguments, this.updateWagon.name);
    if (obj.wagonNumber.toString().charAt(0) === '2'){
      this.wagons[index].wagonType = this.types.get('2');
    }

    else if (obj.wagonNumber.toString().charAt(0) === '3'){
      this.wagons[index].wagonType = this.types.get('3');
    }

    else if (obj.wagonNumber.toString().charAt(0) === '4'){
      this.wagons[index].wagonType = this.types.get('4');
    }

    else if (obj.wagonNumber.toString().charAt(0) === '5'){
      this.wagons[index].wagonType = this.types.get('5');
    }

    else if (obj.wagonNumber.toString().charAt(0) === '6'){
      this.wagons[index].wagonType = this.types.get('6');
    }

    else if (obj.wagonNumber.toString().charAt(0) === '7'){
      this.wagons[index].wagonType = this.types.get('7');
    }

    else if (obj.wagonNumber.toString().charAt(0) === '8'){
      this.wagons[index].wagonType = this.types.get('8');
    }

    else if (obj.wagonNumber.toString().charAt(0) === '9'){
      this.wagons[index].wagonType = this.types.get('9');
    }
    this.wagons[index].manufacturerName = obj.manufacturerName;
    this.wagons[index].wagonNumber = obj.wagonNumber;
    this.wagons[index].condition = obj.condition;
  }

}
