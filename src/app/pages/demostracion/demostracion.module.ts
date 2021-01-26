import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DemostracionPageRoutingModule } from './demostracion-routing.module';

import { DemostracionPage } from './demostracion.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DemostracionPageRoutingModule,
    TranslateModule
  ],
  declarations: [DemostracionPage]
})
export class DemostracionPageModule {}
