import { Curso } from "./curso.js";
import { Pessoa } from "./pessoa.js";

export interface Professor extends Pessoa {
    dataContratacao?: Date;
    departamento?: string;
    salario?: number;
    cursos?: Curso[];
}

export interface ProfessorCreate {
    nome: string;
    sobrenome: string;
    cpf: string;
    sexo: string;
    raca?: string;
    dataContratacao: Date;
    departamento: string;
    salario?: number;
}
