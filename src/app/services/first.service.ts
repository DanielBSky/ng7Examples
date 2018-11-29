import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstService {
  constructor() {
    console.log('ctor in shared service');
  }

  baby = 0;

}
