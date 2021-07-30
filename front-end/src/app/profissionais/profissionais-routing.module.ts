import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfissionaisComponent } from './profissionais-component/profissionais.component';

const routes: Routes = [
  {path: '', component: ProfissionaisComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfissionaisRoutingModule { }
