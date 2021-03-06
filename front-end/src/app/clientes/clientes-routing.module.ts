import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './clientes-component/clientes.component';
import { ClientesFormComponent } from './clientes-form/clientes-form.component';

const routes: Routes = [
  {path: '', component: ClientesComponent},
  {path: 'novo', component: ClientesFormComponent},
  {path: 'editar/:id', component: ClientesFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
