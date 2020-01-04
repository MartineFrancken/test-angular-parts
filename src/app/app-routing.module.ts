import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/address',
        pathMatch: 'full'
    },
    {
        path: 'address',
        loadChildren: () =>
            import('./pages/address/address.module').then(m => m.AddressModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
