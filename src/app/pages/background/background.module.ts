import { RouterModule, Routes } from '@angular/router';
import { BackgroundComponent } from './background.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared/shared.module';

const backgroundRoutes: Routes = [
    {
        path: '',
        component: BackgroundComponent
    }
];

@NgModule({
    declarations: [BackgroundComponent],
    imports: [SharedModule, RouterModule.forChild(backgroundRoutes)]
})
export class BackgroundModule {}
