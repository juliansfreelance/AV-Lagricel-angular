import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SlideUnoComponent } from './slides/slide-uno/slide-uno.component';
import { SlideDosComponent } from './slides/slide-dos/slide-dos.component';
import { SlideTresComponent } from './slides/slide-tres/slide-tres.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { SlideCuatroComponent } from './slides/slide-cuatro/slide-cuatro.component';
import { SlideCincoComponent } from './slides/slide-cinco/slide-cinco.component';
import { SlideSeisComponent } from './slides/slide-seis/slide-seis.component';
import { SlideSieteComponent } from './slides/slide-siete/slide-siete.component';
import { SlideOchoComponent } from './slides/slide-ocho/slide-ocho.component';
import { SlideNueveComponent } from './slides/slide-nueve/slide-nueve.component';
import { SlideDiezComponent } from './slides/slide-diez/slide-diez.component';
import { SlideOnceComponent } from './slides/slide-once/slide-once.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SlideUnoComponent,
    SlideDosComponent,
    SlideTresComponent,
    FooterComponent,
    HeaderComponent,
    SlideCuatroComponent,
    SlideCincoComponent,
    SlideSeisComponent,
    SlideSieteComponent,
    SlideOchoComponent,
    SlideNueveComponent,
    SlideDiezComponent,
    SlideOnceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
