import { Injectable } from '@angular/core';

@Injectable()


export class LoggerService {

  constructor() { }

   log(args, name): void{
    console.log(name);
    console.log(args);
  }
}
