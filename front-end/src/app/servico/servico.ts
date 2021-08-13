import { Empresa } from '../cadastro-empresa/empresa';
import { Agendamento } from './../agendamentos/agendamento';
import { Profissional } from './../profissionais/profissional';

export interface Servico {
  id: number;
  nome: string;
  categoria: string;
  empresa: Empresa[];
  profissionais: Profissional[];
  agendamentos: Agendamento[];
}
