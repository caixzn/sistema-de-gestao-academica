import { Aluno } from "./aluno.js";
import { Campus } from "./campus.js";
import { Disciplina } from "./disciplina.js";
import { Professor } from "./professor.js";

export interface Curso {
    id: number;
    nome?: string;
    campus?: Campus;
    professores?: Professor[];
    alunos?: Aluno[];
    disciplinas?: Disciplina[];
}

export interface CursoCreate {
    nome: string;
    campusId: number;
}
