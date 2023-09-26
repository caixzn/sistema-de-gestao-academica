import { FastifyInstance } from "fastify";
import { AlunoCreate } from "../models/aluno.js";
import AlunoController from "../controllers/alunoController.js";

export default async function aluno(server: FastifyInstance, _opt: any) {
    const alunoController = new AlunoController();

    server.post<{ Body: AlunoCreate }>('/aluno', async (request) => {
        const aluno = request.body;
        console.log(aluno);
        // chama controller
        return aluno;
    });

    server.get('/aluno', async () => {
        return alunoController.findAll();
    });

    server.get<{ Params: { id: number } }>('/aluno/:id', async (request) => {
        const id = request.params.id;
        return alunoController.findById(id);
    });

    server.get<{ Params: { cpf: string } }>('/aluno/cpf/:cpf', async (request) => {
        const cpf = request.params.cpf;
        console.log(cpf);
        // chama controller
        return { id: 1, nome: 'Aluno 1', cpf: cpf, email: 'example@example.com', telefone: '(11) 11111-1111', endereco: { id: 1, logradouro: 'Rua 1', numero: 1, bairro: 'Bairro 1', cidade: 'Cidade 1', estado: 'Estado 1', cep: '11111-111' } };
    });

    server.put<{ Params: { id: number }, Body: AlunoCreate }>('/aluno/:id', async (request) => {
        const id = request.params.id;
        const aluno = request.body;
        console.log(id, aluno);
        // chama controller
        return aluno;
    });

    server.delete<{ Params: { id: number } }>('/aluno/:id', async (request) => {
        const id = request.params.id;
        console.log(id);
        // chama controller
        return { deleted: true };
    });
}