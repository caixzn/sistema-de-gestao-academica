export interface Endereco {
    id?: number;
    pessoaId?: number;
    logradouro?: string;
    numero?: number;
    complemento?: string;
    bairro?: string;
    cidade?: string;
    estado?: string;
    cep?: string;
}

export interface EnderecoCreate {
    logradouro: string;
    numero: number;
    complemento?: string;
    bairro: string;
    cidade: string;
    estado: string;
    cep: string;
}
