import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-wagons',
  templateUrl: './wagons.component.html',
  styleUrls: ['./wagons.component.css']
})
export class WagonsComponent implements OnInit {
  constructor() {
    this.wagons = [];
  }

  // onSubmit(value: any): void{
  //   console.log(value.condition);
  // }

  manufacturerName: string;
  wagonNumber: string;
  condition: string;
  wagonType: string;

  wagons: any;
  wagonObj: any;

  @ViewChild('editSection') editSection: ElementRef;
  @ViewChild('editName') editName: ElementRef;
  @ViewChild('editNumber') editNumber: ElementRef;
  @ViewChild('editCondition') editCondition: ElementRef;

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

  // reactive form
  inputForm = new FormGroup({
    name: new FormControl('', [Validators.maxLength(50), Validators.required]),
    numb: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]),
    condition: new FormControl('')
  });

  validateWagon(numb: string): boolean{
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


    // console.log(pr1);
    // console.log(pr2);
    // console.log(pr3);
    // console.log(pr4);
    // console.log(pr5);
    // console.log(pr6);
    // console.log(pr7);
    // first pr
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

    console.log(sum);
    console.log(Math.ceil(sum / 10) * 10);
    if (((Math.ceil(sum / 10) * 10) - (parseInt(numb.charAt(7), 10))) === sum){
      console.log(true);
      return true;
    }
    else{
      console.log(false);
      return false;
    }
  }

  // numberValidation(control: FormControl): {[s: string]: boolean}{
  //
  //   if (this.validateWagon(control.value) === false){
  //     return {numb: true};
  //   }
  //   return null;
  // }
  addWagon(): void{
    if (this.validateWagon(this.wagonNumber.toString()) === true){
      if (this.wagonNumber.toString().charAt(0) === '2'){
        this.wagonType = this.types.get('2');
      }

      else if (this.wagonNumber.toString().charAt(0) === '3'){
        this.wagonType = this.types.get('3');
      }

      else if (this.wagonNumber.toString().charAt(0) === '4'){
        this.wagonType = this.types.get('4');
      }

      else if (this.wagonNumber.toString().charAt(0) === '5'){
        this.wagonType = this.types.get('5');
      }

      else if (this.wagonNumber.toString().charAt(0) === '6'){
        this.wagonType = this.types.get('6');
      }

      else if (this.wagonNumber.toString().charAt(0) === '7'){
        this.wagonType = this.types.get('7');
      }

      else if (this.wagonNumber.toString().charAt(0) === '8'){
        this.wagonType = this.types.get('8');
      }

      else if (this.wagonNumber.toString().charAt(0) === '9'){
        this.wagonType = this.types.get('9');
      }

      this.wagonObj = {
        manufacturerName: this.manufacturerName,
        wagonNumber: this.wagonNumber,
        condition: this.condition,
        wagonType: this.wagonType
      };

      this.wagons.push(this.wagonObj);

      this.inputForm.reset();
    }

    else{
      window.alert('change number');
    }
    // event.preventDefault();
  }

  deleteWagon(index): void{
    this.wagons.splice(index, 1);
  }
  // editWagon(): void{
  //   this.editSection.nativeElement.style.display = 'block';
  // }
  //
  // updateWagon(index): void{
  //   this.wagons[index].manufacturerName = this.editName.nativeElement.value;
  //   this.wagons[index].wagonNumber = this.editNumber.nativeElement.value;
  //   this.wagons[index].condition = this.editCondition.nativeElement.value;
  //   this.editName.nativeElement.value = '';
  //   this.editNumber.nativeElement.value = '';
  //   this.editCondition.nativeElement.value = '';
  //   this.editSection.nativeElement.style.display = 'none';
  // }


  ngOnInit(): void {
  }
}
