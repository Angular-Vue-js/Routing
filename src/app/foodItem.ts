import { Component, Input } from '@angular/core';
import { HomeComponent } from './home';

@Component({
    selector: 'foodItem',
    templateUrl: `./foodItem.html`,
    providers: [HomeComponent]
})

export class FoodItem {
    @Input()
    id: number;
    name: string;
    mfg: string;
    pkg: string;
    qty: number;
}
