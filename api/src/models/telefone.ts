export interface Telefone {
    id?: number;
    numero?: string;
    ddd?: string;
    codPais?: string;
}

export interface TelefoneCreate {
    numero: string;
    ddd: string;
    codPais?: string;
}
