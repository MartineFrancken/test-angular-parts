import { Component, OnInit } from '@angular/core';
import { AddressModel } from '@ambusuite/models';

@Component({
    selector: 'app-address',
    templateUrl: './address.component.html',
    styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
    public address = new AddressModel();

    constructor() {}

    ngOnInit() {}
}
