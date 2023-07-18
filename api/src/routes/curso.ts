import { FastifyInstance } from "fastify";
import { Curso, CursoCreate } from "../models/curso.js";

export default async function curso(server: FastifyInstance, _opt: any) {
    server.post<{ Body: CursoCreate }>('/curso', async (request) => {
        const curso = request.body;
        console.log(curso);
        // chama controller
        return curso;
    });

    server.get('/curso', async () => {
        // chama controller
        return [{ id: 1, logradouro: 'Rua 1', numero: 1, bairro: 'Bairro 1', cidade: 'Cidade 1', estado: 'Estado 1', cep: '11111-111' }];
    });

    server.get<{ Params: { id: number } }>('/curso/:id', async (request) => {
        const id = request.params.id;
        console.log(id);
        // chama controller
        return { id: id, logradouro: 'Rua 1', numero: 1, bairro: 'Bairro 1', cidade: 'Cidade 1', estado: 'Estado 1', cep: '11111-111' };
    });

    server.put<{ Params: { id: number }, Body: Curso }>('/curso/:id', async (request) => {
        const id = request.params.id;
        const curso = request.body;
        console.log(curso, id);
        // chama controller
        return curso;
    });

    server.delete<{ Params: { id: number } }>('/curso/:id', async (request) => {
        const id = request.params.id;
        console.log(id);
        // chama controller
        return { deleted: true };
    });
}