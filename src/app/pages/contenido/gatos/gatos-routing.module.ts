import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GatosPage } from './gatos.page';

const routes: Routes = [
  {
    path: '',
    component: GatosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GatosPageRoutingModule {}
