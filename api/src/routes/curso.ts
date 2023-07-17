import { FastifyInstance } from "fastify";
import { CursoCreate } from "../db/models/curso.js";

export default async function curso(server: FastifyInstance, options: any) {
    server.post<{ Body: CursoCreate }>('/curso', async (request, reply) => {
        const curso = request.body;
        console.log(curso);
        // chama controller
        return curso;
    });

    server.get('/curso', async (request, reply) => {
        // chama controller
        return [{ id: 1, logradouro: 'Rua 1', numero: 1, bairro: 'Bairro 1', cidade: 'Cidade 1', estado: 'Estado 1', cep: '11111-111' }];
    });

    server.get<{ Params: { id: number } }>('/curso/:id', async (request, reply) => {
        const id = request.params.id;
        // chama controller
        return { id: id, logradouro: 'Rua 1', numero: 1, bairro: 'Bairro 1', cidade: 'Cidade 1', estado: 'Estado 1', cep: '11111-111' };
    });

    server.put<{ Params: { id: number }, Body: CursoCreate }>('/curso/:id', async (request, reply) => {
        const id = request.params.id;
        const curso = request.body;
        console.log(curso);
        // chama controller
        return curso;
    });

    server.delete<{ Params: { id: number } }>('/curso/:id', async (request, reply) => {
        const id = request.params.id;
        // chama controller
        return { deleted: true };
    });
}