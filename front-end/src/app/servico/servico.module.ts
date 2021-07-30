import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicoRoutingModule } from './servico-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ServicoComponent } from './servico.component';


@NgModule({
  declarations: [ServicoComponent],
  imports: [
    CommonModule,
    ServicoRoutingModule,
    SharedModule
  ],
  exports: [
    ServicoComponent
  ]
})
export class ServicoModule { }
