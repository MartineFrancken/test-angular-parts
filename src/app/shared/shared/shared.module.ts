import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { AmbuSuiteModule } from '@ambusuite/angular';
import {
    AddressModule,
    SituationOnLocationModule,
    SituationAirwayModule,
    SituationBreathingModule,
    SituationCirculationModule,
    SituationDisabilityModule,
    SituationGeneralModule,
    SituationIncidentModule,
    BackgroundAllergiesModule,
    BackgroundEventsModule,
    BackgroundMedicationModule,
    BackgroundPastModule,
    BackgroundSymptomsModule
} from '@ambusuite/angular-parts';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        FormsModule,
        TranslateModule,
        AmbuSuiteModule,
        AddressModule,
        SituationGeneralModule,
        SituationIncidentModule,
        SituationOnLocationModule,
        SituationAirwayModule,
        SituationBreathingModule,
        SituationCirculationModule,
        SituationDisabilityModule,
        BackgroundAllergiesModule,
        BackgroundEventsModule,
        BackgroundMedicationModule,
        BackgroundPastModule,
        BackgroundSymptomsModule
    ],
    exports: [
        AddressModule,
        SituationGeneralModule,
        SituationIncidentModule,
        SituationOnLocationModule,
        SituationAirwayModule,
        SituationBreathingModule,
        SituationCirculationModule,
        SituationDisabilityModule,
        BackgroundAllergiesModule,
        BackgroundEventsModule,
        BackgroundMedicationModule,
        BackgroundPastModule,
        BackgroundSymptomsModule
    ]
})
export class SharedModule {}
