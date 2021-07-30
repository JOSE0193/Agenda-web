import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'home', pathMatch: "full",
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'clientes',
    loadChildren: () => import('./clientes/clientes.module').then(m => m.ClientesModule)
  },
  {
    path: 'agendamentos',
    loadChildren: () => import('./agendamentos/agendamentos.module').then(m => m.AgendamentosModule)
  },
  {
    path: 'profissionais',
    loadChildren: () => import('./profissionais/profissionais.module').then(m => m.ProfissionaisModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'servicos',
    loadChildren: () => import('./servico/servico.module').then(m => m.ServicoModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
