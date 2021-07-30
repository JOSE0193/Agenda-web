import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfissionaisRoutingModule } from './profissionais-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProfissionaisComponent } from './profissionais-component/profissionais.component';


@NgModule({
  declarations: [ProfissionaisComponent],
  imports: [
    CommonModule,
    ProfissionaisRoutingModule,
    SharedModule
  ],
  exports: [
    ProfissionaisComponent
  ]
})
export class ProfissionaisModule { }
