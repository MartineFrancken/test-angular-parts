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
    },
    {
        path: 'situation',
        loadChildren: () =>
            import('./pages/situation/situation.module').then(
                m => m.SituationModule
            )
    },
    {
        path: 'background',
        loadChildren: () =>
            import('./pages/background/background.module').then(
                m => m.BackgroundModule
            )
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
