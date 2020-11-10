import {BrowseModule} from '@angular/platform-broser';
import {NgModule} from'@angular/core';

import {HttpClienModule} from '@angular/common/http';


import {AppComponent} from './app.component';
import {NarbarComponent} from './components/navbar/navbar.component';
import {HomeComponent} from '/pages/home/home.component';


NgModule({
    declaratios:[
        AppComponent,
        NarbarComponent,
        HomeComponent,
    ],
    imports: [
        BrowseModule,
        HttpClienModule
    ],
    providers:[],
    bootstrap: [AppComponent]
})
export class AppModule { }
