import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-comp',
  template: `<h2 class="blue" appHighlight>
              first component
            </h2>
            <ul>
              <li *ngFor="let f of arr">
                {{f}}
              </li>
            </ul>
  
  `,
  styles: [`.blue {color: blue}`]
})
export class FirstCompComponent implements OnInit {



  arr: string[] = ['number1', 'number2', 'number3'];
  constructor() { }

  ngOnInit() {
  }

}
