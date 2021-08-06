import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';

import { ClientesComponent } from './clientes-component/clientes.component';
import { ClientesFormComponent } from './clientes-form/clientes-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ClientesComponent,
    ClientesFormComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    ClientesComponent,
    ClientesFormComponent
  ]
})
export class ClientesModule { }
