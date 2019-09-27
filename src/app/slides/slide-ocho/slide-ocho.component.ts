import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-ocho',
  templateUrl: './slide-ocho.component.html',
  styleUrls: ['./slide-ocho.component.css']
})
export class SlideOchoComponent implements OnInit {
  pop1 = false;
  contenPop = false;
  togglePop1() {
    this.pop1 = ! this.pop1;
    this.contenPop = ! this.contenPop;
  }
  closePop() {
    this.pop1 = false ;
    this.contenPop = false ;
  }
  constructor() { }

  ngOnInit() {
  }

}
