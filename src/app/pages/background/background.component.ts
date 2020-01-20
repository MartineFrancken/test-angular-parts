import { Component, OnInit } from '@angular/core';
import { BackgroundModel } from '@ambusuite/models';

@Component({
    selector: 'app-background',
    templateUrl: './background.component.html',
    styleUrls: ['./background.component.scss']
})
export class BackgroundComponent {
    public background = new BackgroundModel();
    public isDisabled = false;
}
