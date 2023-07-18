import { Endereco } from "./endereco.js";

export interface Campus {
    id: number;
    nome?: string;
    endereco?: Endereco;
}

export interface CampusCreate {
    nome: string;
    endereco: Endereco;
}
