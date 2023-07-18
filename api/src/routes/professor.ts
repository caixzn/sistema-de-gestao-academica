import { FastifyInstance } from "fastify";
import { ProfessorCreate } from "../models/professor.js";

export default async function professor(server: FastifyInstance, opt: any) {
    server.post<{ Body: ProfessorCreate }>('/professor', async (request) => {
        const professor = request.body;
        console.log(professor);
        // chama controller
        return professor;
    });

    server.get('/professor', async () => {
        // chama controller
        return [{ id: 1, nome: 'Professor 1', cpf: '111.111.111-11', email: 'example@example.com', telefone: '(11) 11111-1111', endereco: { id: 1, logradouro: 'Rua 1', numero: 1, bairro: 'Bairro 1', cidade: 'Cidade 1', estado: 'Estado 1', cep: '11111-111' } }];
    });

    server.get<{ Params: { id: number } }>('/professor/:id', async (request) => {
        const id = request.params.id;
        // chama controller
        return { id: id, nome: 'Professor 1', cpf: '111.111.111-11', email: 'example@example.com', telefone: '(11) 11111-1111', endereco: { id: 1, logradouro: 'Rua 1', numero: 1, bairro: 'Bairro 1', cidade: 'Cidade 1', estado: 'Estado 1', cep: '11111-111' } };
    });

    server.get<{ Params: { cpf: string } }>('/professor/cpf/:cpf', async (request) => {
        const cpf = request.params.cpf;
        // chama controller
        return { id: 1, nome: 'Professor 1', cpf: cpf, email: 'example@example.com', telefone: '(11) 11111-1111', endereco: { id: 1, logradouro: 'Rua 1', numero: 1, bairro: 'Bairro 1', cidade: 'Cidade 1', estado: 'Estado 1', cep: '11111-111' } };
    });

    server.put<{ Params: { id: number }, Body: ProfessorCreate }>('/professor/:id', async (request) => {
        const id = request.params.id;
        const professor = request.body;
        console.log(professor);
        // chama controller
        return professor;
    });

    server.delete<{ Params: { id: number } }>('/professor/:id', async (request, reply) => {
        const id = request.params.id;
        // chama controller
        return { deleted: true };
    });
}