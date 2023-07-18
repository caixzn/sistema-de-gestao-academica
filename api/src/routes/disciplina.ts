import { FastifyInstance } from "fastify";
import { DisciplinaCreate } from "../models/disciplina.js";

export default async function disciplina(server: FastifyInstance, _opt: any) {
    server.post<{ Body: DisciplinaCreate }>('/disciplina', async (request) => {
        const disciplina = request.body;
        console.log(disciplina);
        // chama controller
        return disciplina;
    });

    server.get('/disciplina', async () => {
        // chama controller
        return [{ id: 1, logradouro: 'Rua 1', numero: 1, bairro: 'Bairro 1', cidade: 'Cidade 1', estado: 'Estado 1', cep: '11111-111' }];
    });

    server.get<{ Params: { id: number } }>('/disciplina/:id', async (request) => {
        const id = request.params.id;
        console.log(id);
        // chama controller
        return { id: id, logradouro: 'Rua 1', numero: 1, bairro: 'Bairro 1', cidade: 'Cidade 1', estado: 'Estado 1', cep: '11111-111' };
    });

    server.get<{ Params: { prerequisito: number } }>('/disciplina/prerequisito/:prerequisito', async (request) => {
        const prerequisito = request.params.prerequisito;
        console.log(prerequisito);
        // chama controller
        return [{ id: 1, logradouro: 'Rua 1', numero: 1, bairro: 'Bairro 1', cidade: 'Cidade 1', estado: 'Estado 1', cep: '11111-111' }];
    });

    server.put<{ Params: { id: number }, Body: DisciplinaCreate }>('/disciplina/:id', async (request) => {
        const id = request.params.id;
        const disciplina = request.body;
        console.log(disciplina, id);
        // chama controller
        return disciplina;
    });

    server.delete<{ Params: { id: number } }>('/disciplina/:id', async (request) => {
        const id = request.params.id;
        console.log(id);
        // chama controller
        return { deleted: true };
    });
}