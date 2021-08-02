import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfissionaisRoutingModule } from './profissionais-routing.module';
import { ProfissionaisComponent } from './profissionais-component/profissionais.component';


@NgModule({
  declarations: [ProfissionaisComponent],
  imports: [
    CommonModule,
    ProfissionaisRoutingModule
  ],
  exports: [
    ProfissionaisComponent
  ]
})
export class ProfissionaisModule { }
