import { Injectable } from '@angular/core';

@Injectable()
export class PrivateService {

  baby = 1;

  constructor() {
    console.log('ctor in private service');
  }
}
