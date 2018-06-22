import { Component } from '@angular/core';
import { FoodItem } from './foodItem';
import { initNgModule } from '@angular/core/src/view/ng_module';

var i: number;

var FOODITEMS: FoodItem[] = [
  { id: 1, name: "Cucumbers", mfg: "Hot House", pkg: "10 KG", qty: 6 },
  { id: 2, name: "Carrots", mfg: "Hot House", pkg: "8 KG", qty: 14 },
  { id: 3, name: "Cheese", mfg: "Hot House", pkg: "5 KG", qty: 20 },
  { id: 4, name: "French Fries", mfg: "McCain", pkg: "15 KG", qty: 8 }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  public title = 'app';
  public fooditems = FOODITEMS;

  ngAfterViewInit() {
    for (i = 0; i < FOODITEMS.length; i++) {
      sessionStorage.setItem((FOODITEMS[i].id).toString(), JSON.stringify(FOODITEMS[i]));
    }
  }
}