import { FastifyInstance } from "fastify";
import { DisciplinaCreate } from "../db/models/disciplina.js";

export default async function disciplina(server: FastifyInstance, options: any) {
    server.post<{ Body: DisciplinaCreate }>('/disciplina', async (request, reply) => {
        const disciplina = request.body;
        console.log(disciplina);
        // chama controller
        return disciplina;
    });

    server.get('/disciplina', async (request, reply) => {
        // chama controller
        return [{ id: 1, logradouro: 'Rua 1', numero: 1, bairro: 'Bairro 1', cidade: 'Cidade 1', estado: 'Estado 1', cep: '11111-111' }];
    });

    server.get<{ Params: { id: number } }>('/disciplina/:id', async (request, reply) => {
        const id = request.params.id;
        // chama controller
        return { id: id, logradouro: 'Rua 1', numero: 1, bairro: 'Bairro 1', cidade: 'Cidade 1', estado: 'Estado 1', cep: '11111-111' };
    });

    server.get<{ Params: { prerequisito: number } }>('/disciplina/prerequisito/:prerequisito', async (request, reply) => {
        const prerequisito = request.params.prerequisito;
        // chama controller
        return [{ id: 1, logradouro: 'Rua 1', numero: 1, bairro: 'Bairro 1', cidade: 'Cidade 1', estado: 'Estado 1', cep: '11111-111' }];
    });

    server.put<{ Params: { id: number }, Body: DisciplinaCreate }>('/disciplina/:id', async (request, reply) => {
        const id = request.params.id;
        const disciplina = request.body;
        console.log(disciplina);
        // chama controller
        return disciplina;
    });

    server.delete<{ Params: { id: number } }>('/disciplina/:id', async (request, reply) => {
        const id = request.params.id;
        // chama controller
        return { deleted: true };
    });
}