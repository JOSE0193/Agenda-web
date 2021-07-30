import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgendamentosRoutingModule } from './agendamentos-routing.module';
import { AgendamentosComponent } from './agendamentos.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AgendamentosComponent
  ],
  imports: [
    CommonModule,
    AgendamentosRoutingModule,
    SharedModule
  ],
  exports: [
    AgendamentosComponent
  ]
})
export class AgendamentosModule { }
