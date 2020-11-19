import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { NumberValidator } from '../shared/number.validator';
import {CarriageService} from '../services/carriage.service';
import {CarriageValidatorService} from '../services/carriage-validator.service';
import {LoggerService} from '../services/logger.service';

@Component({
  selector: 'app-wagons',
  templateUrl: './wagons.component.html',
  styleUrls: ['./wagons.component.css'],
  providers: [CarriageValidatorService, LoggerService]
})
export class WagonsComponent implements OnInit {
  serviceWagons: any[];
  constructor(private carriageValidatorService: CarriageValidatorService, private carriageService: CarriageService) {
    this.serviceWagons = carriageService.getWagons();
  }

  // не должны передаваться данные из формы в сервис, должны возвращаться объекты
  manufacturerName: string;
  wagonNumber: string;
  condition: string;
  wagonType: string;
  wagons = [];
  notValide = true;

  editName: any;
  editNumber: any;
  editCondition: any;
  inputForm: FormGroup;

  wagonObj: any;

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

  ngOnInit(): void {
    // reactive form
    this.inputForm = new FormGroup({
      name: new FormControl('', [Validators.maxLength(50), Validators.required]),
      number: new FormControl('', [Validators.maxLength(8), Validators.minLength(8), Validators.required, this.carriageValidatorService.validateNumber]),
      condition: new FormControl('', [Validators.required])
    });
  }

//
  addWagon(): void{
    this.wagonObj = {
      manufacturerName: this.inputForm.value.name,
      wagonNumber: this.inputForm.value.number,
      condition: this.inputForm.value.condition,
      wagonType: null
    };
    this.carriageService.addNewWagon(this.wagonObj);
  }

validateName(val: string): boolean{
  if (val.length > 50 || val === '' || val === null) {
    this.notValide = true;
    return false;
  }

  else{
    this.notValide = false;
    return true;
  }
}


  validateWagon(val: string): boolean{
    const numb = val.toString();
    if (numb.length !== 8 || numb === '' || numb === null){
      this.notValide = true;
    }

    else{
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
        console.log(true);
        this.notValide = false;
        return true;
      }
      else{
        console.log(false);
        this.notValide = true;
        return false;
      }
    }
  }


  deleteWagon(index): void{
    this.carriageService.deleteWagon(index, this.serviceWagons);
  }

  updateWagon(index): void{
    this.wagonObj = {
      manufacturerName: this.editName,
      wagonNumber: this.editNumber,
      condition: this.editCondition,
      wagonType: null
    };
    this.carriageService.updateWagon(index, this.wagonObj);
  }
}
