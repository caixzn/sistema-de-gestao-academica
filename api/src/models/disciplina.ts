export interface Disciplina {
    id: number;
    nome?: string;
    descricao?: string;
    preRequisitos?: Disciplina[];
}

export interface DisciplinaCreate {
    nome: string;
    descricao: string;
    preRequisitos?: number[];
}
