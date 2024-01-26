import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GatosPageRoutingModule } from './gatos-routing.module';

import { GatosPage } from './gatos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GatosPageRoutingModule
  ],
  declarations: [GatosPage]
})
export class GatosPageModule {}
