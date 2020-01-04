import { NgModule } from '@angular/core';
import { AddressComponent } from './address.component';
import { SharedModule } from '../../shared/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

const addressRoutes: Routes = [
    {
        path: '',
        component: AddressComponent
    }
];

@NgModule({
    declarations: [AddressComponent],
    imports: [SharedModule, RouterModule.forChild(addressRoutes)]
})
export class AddressModule {}
