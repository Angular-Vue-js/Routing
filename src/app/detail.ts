import { Component, Input } from '@angular/core';
import { HomeComponent } from './home';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: "detail",
    templateUrl: './detail.html',
    styleUrls: ['./app.component.css'],
})

export class DetailComponent {
    itemId: string;
    item: string;

    constructor(private route: ActivatedRoute){
        //this.itemId = home.onSlect(passingId);
    }
    
    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            let localID = params['id'];
            //this.itemId = localID;
            this.itemId = JSON.parse(sessionStorage.getItem(params['id']));
        });

    }
}