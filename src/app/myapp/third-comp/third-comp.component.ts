import { Component, OnInit } from '@angular/core';
import {FirstService} from '../../services/first.service';
import {PrivateService} from '../../services/private.service';

@Component({
  selector: 'app-third-comp',
  templateUrl: './third-comp.component.html',
  styleUrls: ['./third-comp.component.css'],
  providers: [PrivateService]
})
export class ThirdCompComponent implements OnInit {

  constructor(public firstService: FirstService, public privateService: PrivateService) {
  }

  incr() {
    this.firstService.baby ++;
    this.privateService.baby ++;
  }
  ngOnInit() {
  }

}
