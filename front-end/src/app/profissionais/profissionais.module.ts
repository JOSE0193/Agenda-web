import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfissionaisRoutingModule } from './profissionais-routing.module';
import { ProfissionaisComponent } from './profissionais.component';
import { SharedModule } from '../shared/shared.module';


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
