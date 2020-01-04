import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { AmbuSuiteModule } from '@ambusuite/angular';
import { AddressModule } from '@ambusuite/angular-parts';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        FormsModule,
        TranslateModule,
        AmbuSuiteModule,
        AddressModule
    ],
    exports: [AddressModule]
})
export class SharedModule {}
