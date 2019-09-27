import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-cinco',
  templateUrl: './slide-cinco.component.html',
  styleUrls: ['./slide-cinco.component.css']
})
export class SlideCincoComponent implements OnInit {
  pop1 = false ;
  pop2 = false ;
  contenPop = false ;
  togglePop1() {
    this.pop1 = ! this.pop1;
    this.contenPop = ! this.contenPop;
  }
  togglePop2() {
    this.pop2 = ! this.pop2;
    this.contenPop = ! this.contenPop;
  }
  closePop() {
    this.pop1 = false ;
    this.pop2 = false ;
    this.contenPop = false ;
  }
  constructor() { }

  ngOnInit() {
  }

}
