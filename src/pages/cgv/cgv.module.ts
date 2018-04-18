import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CgvPage } from './cgv';


@NgModule({
    declarations: [
        CgvPage,
    ],
    imports: [
        IonicPageModule.forChild(CgvPage),
    ],
})

export class CgvPageModule {}