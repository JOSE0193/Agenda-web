import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgendamentosRoutingModule } from './agendamentos-routing.module';
import { AgendamentosComponent } from './agendamentos-component/agendamentos.component';

@NgModule({
  declarations: [
    AgendamentosComponent
  ],
  imports: [
    CommonModule,
    AgendamentosRoutingModule
  ],
  exports: [
    AgendamentosComponent
  ]
})
export class AgendamentosModule { }
