import { SituationComponent } from './situation.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared/shared.module';
import { FormsModule } from '@angular/forms';

const situationRoutes: Routes = [
    {
        path: '',
        component: SituationComponent
    }
];

@NgModule({
    declarations: [SituationComponent],
    imports: [SharedModule, RouterModule.forChild(situationRoutes), FormsModule]
})
export class SituationModule {}
