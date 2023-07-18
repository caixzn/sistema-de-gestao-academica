import { Curso } from "./curso.js";
import { Endereco } from "./endereco.js";
import { Pessoa } from "./pessoa.js";
import { Telefone } from "./telefone.js";

export interface Aluno extends Pessoa {
    dataNascimento?: Date;
    dataIngresso?: Date;
    cursos?: Curso[];
}

export interface AlunoCreate {
    nome: string;
    sobrenome: string;
    cpf: string;
    sexo: string;
    raca?: string;
    dataNascimento: Date;
    dataIngresso: Date;
    enderecos?: Endereco[];
    telefones?: Telefone[];
}
