import { Servico } from "../servico/servico";

export interface Empresa {
  id: number;
  nome: string;
  cnpj: string;
  email: string;
  servicos: Servico[];
}
