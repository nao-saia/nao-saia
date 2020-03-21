import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

    _id: string;

    constructor(private route: ActivatedRoute) {
        this.route.params.subscribe(params => this._id = params['id']);
        console.log(this._id)
     }

    ngOnInit() {}

}
