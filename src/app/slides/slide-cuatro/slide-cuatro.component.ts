import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-cuatro',
  templateUrl: './slide-cuatro.component.html',
  styleUrls: ['./slide-cuatro.component.css']
})
export class SlideCuatroComponent implements OnInit {
  pop1 = false ;
  pop2 = false ;
  mas1 = false ;
  contenPop = false ;
  togglePop1() {
    this.pop1 = ! this.pop1;
    this.contenPop = ! this.contenPop;
  }
  togglePop2() {
    this.pop2 = ! this.pop2;
    this.contenPop = ! this.contenPop;
  }
  toggleMas1() {
    this.mas1 = ! this.mas1;
    this.contenPop = ! this.contenPop;
  }
  closePop() {
    this.pop1 = false ;
    this.pop2 = false ;
    this.mas1 = false ;
    this.contenPop = false ;
  }
  constructor() { }

  ngOnInit() {
  }

}
