import { Profissional } from './../profissionais/profissional';
import { Cliente } from "../clientes/cliente";
import { Servico } from "../servico/servico";

export interface Agendamento {
  id: number;
  data: Date;
  observacoes: string;
  cliente: Cliente;
  servico: Servico;
  profissional: Profissional
}
