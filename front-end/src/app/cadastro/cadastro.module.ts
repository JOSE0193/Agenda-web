import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro-component/cadastro.component';

import { CadastroRoutingModule } from './cadastro-routing.module';

@NgModule({
  declarations: [CadastroComponent],
  imports: [
    CommonModule,
    CadastroRoutingModule
  ],
  exports: [
    CadastroComponent
  ]
})
export class CadastroModule { }
