import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SlideUnoComponent } from './slides/slide-uno/slide-uno.component';
import { SlideDosComponent } from './slides/slide-dos/slide-dos.component';
import { SlideTresComponent } from './slides/slide-tres/slide-tres.component';
import { SlideCuatroComponent } from './slides/slide-cuatro/slide-cuatro.component';
import { SlideCincoComponent } from './slides/slide-cinco/slide-cinco.component';
import { SlideSeisComponent } from './slides/slide-seis/slide-seis.component';
import { SlideSieteComponent } from './slides/slide-siete/slide-siete.component';
import { SlideOchoComponent } from './slides/slide-ocho/slide-ocho.component';
import { SlideNueveComponent } from './slides/slide-nueve/slide-nueve.component';
import { SlideDiezComponent } from './slides/slide-diez/slide-diez.component';
import { SlideOnceComponent } from './slides/slide-once/slide-once.component';

const app_routes: Routes = [
    { path: 'slide/1', component: SlideUnoComponent },
    { path: 'slide/2', component: SlideDosComponent },
    { path: 'slide/3', component: SlideTresComponent },
    { path: 'slide/4', component: SlideCuatroComponent },
    { path: 'slide/5', component: SlideCincoComponent },
    { path: 'slide/6', component: SlideSeisComponent },
    { path: 'slide/7', component: SlideSieteComponent },
    { path: 'slide/8', component: SlideOchoComponent },
    { path: 'slide/9', component: SlideNueveComponent },
    { path: 'slide/10', component: SlideDiezComponent },
     { path: 'slide/11', component: SlideOnceComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'slide/1' }
];

@NgModule({
    imports: [
        RouterModule.forRoot( app_routes, { useHash: true } )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}