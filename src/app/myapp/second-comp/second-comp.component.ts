import { Component, OnInit } from '@angular/core';
import {FirstService} from '../../services/first.service';
import {PrivateService} from '../../services/private.service';

@Component({
  selector: 'app-second-comp',
  templateUrl: './second-comp.component.html',
  styleUrls: ['./second-comp.component.css'],
  providers: [PrivateService]
})
export class SecondCompComponent implements OnInit {

  constructor(public firstService: FirstService, public privateService: PrivateService) {
  }

  incr() {
    this.firstService.baby ++;
    this.privateService.baby ++;
  }
  ngOnInit() {
  }

}
