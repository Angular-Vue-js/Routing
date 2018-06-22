import { Component } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about';
import { PageDefault } from './pagedefault';
import { DetailComponent } from './detail';

var i: number;

@Component({
    selector: "home",
    templateUrl: './home.html',
})


export class HomeComponent {
    someItem: string;
    someItem2: string;
    someItem3: string;
    someItem4: string;
    passingId: string;

    constructor() {
        //for (i = 1; i < sessionStorage.length; i++) {
        this.someItem = JSON.parse(sessionStorage.getItem("1"));
        this.someItem2 = JSON.parse(sessionStorage.getItem("2"));
        this.someItem3 = JSON.parse(sessionStorage.getItem("3"));
        this.someItem4 = JSON.parse(sessionStorage.getItem("4"));
        //}
    }

}