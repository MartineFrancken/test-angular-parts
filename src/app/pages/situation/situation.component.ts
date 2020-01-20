import { Component, OnInit } from '@angular/core';
import {
    BaseDataValueModel,
    SituationAirwayModel,
    SituationBreathingModel,
    SituationCirculationModel,
    SituationDisabilityModel,
    SituationGeneralModel,
    SituationIncidentModel
} from '@ambusuite/models';

@Component({
    selector: 'app-situation',
    templateUrl: './situation.component.html',
    styleUrls: ['./situation.component.scss']
})
export class SituationComponent implements OnInit {
    public general = new SituationGeneralModel();
    public reason = 'Voorbeeldtekst voor reden van melding';
    public incident = new SituationIncidentModel();
    public airway = new SituationAirwayModel();
    public breathing = new SituationBreathingModel();
    public circulation = new SituationCirculationModel();
    public disability = new SituationDisabilityModel();
    public isDisabled = false;

    public mechanismOptions = new Array<BaseDataValueModel>();
    public leftRightOptions = ['L', 'R'];

    public temp = 0;

    constructor() {}

    ngOnInit(): void {
        const option1 = new BaseDataValueModel();
        option1.name = 'Mega';
        this.mechanismOptions.push(option1);
        const impactSpeed = new BaseDataValueModel();
        impactSpeed.name = 'Val (van hoogte)';
        this.mechanismOptions.push(impactSpeed);
        const low = new BaseDataValueModel();
        low.name = 'Laag energetisch trauma';
        this.mechanismOptions.push(low);
    }

    public onChangeIncident(incident) {
        console.log(incident);
        console.log(typeof incident);
    }
}
