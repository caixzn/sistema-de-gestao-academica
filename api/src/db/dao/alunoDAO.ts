import DAO from "./dao.js";
import db from "../connection.js";

export default class AlunoDAO implements DAO {
    async create(request: any) {
        throw new Error("Method not implemented.");
    }

    async findById(id: number) {
        const result = await db.query.pessoa.findMany({
            columns: {
                id: false
            },
            where: (p, { eq }) => (eq(p.id, id)),
            with: {
                aluno: {
                    columns: {
                        id: false
                    }
                },
                telefones: true,
                enderecos: true
            }
        });
        return result[0];
    }

    async findAll() {
        const result = await db.query.pessoa.findMany({
            with: {
                aluno: {
                    columns: { id: false }
                }
            }
        });
        return result;
    }

    async update(request: any) {
        throw new Error("Method not implemented.");
    }

    async delete(request: any) {
        throw new Error("Method not implemented.");
    }
}