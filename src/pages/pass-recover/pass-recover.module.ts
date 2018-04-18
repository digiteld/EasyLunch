import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {PassRecoverPage} from './pass-recover';

@NgModule({
    declarations: [
        PassRecoverPage,
    ],
    imports: [
        IonicPageModule.forChild(PassRecoverPage),
    ],
})
export class PassRecoverModule {}