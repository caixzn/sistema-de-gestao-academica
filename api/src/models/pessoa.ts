import { Endereco } from "./endereco.js";
import { Telefone } from "./telefone.js";

export interface Pessoa {
    id?: number;
    nome?: string;
    sobrenome?: string;
    cpf: string;
    sexo?: 'M' | 'F' | 'O';
    raca?: string;
    enderecos: Endereco[];
    telefones: Telefone[];
}
