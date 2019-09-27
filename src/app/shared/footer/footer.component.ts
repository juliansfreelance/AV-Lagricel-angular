import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  slide: string;
  nextSlide: number;
  next: string;
  prevSlide: number;
  prev: string;
  constructor( private route: ActivatedRoute ) { }

  ngOnInit() {
    this.route.url
        .subscribe( parametros => {
          this.slide = parametros[1].path;
          this.nextSlide = ( parseInt( this.slide ) + 1);
          this.next =  ( this.nextSlide.toString( ) );
          this.prevSlide = ( parseInt( this.slide ) - 1);
          this.prev =  ( this.prevSlide.toString( ) );
        });
  }

}
