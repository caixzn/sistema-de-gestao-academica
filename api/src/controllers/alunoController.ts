import AlunoDAO from "../db/dao/alunoDAO.js";
import { AlunoCreate } from "../models/aluno.js";
import Controller from "./controller.js";

export default class AlunoController implements Controller {
    private readonly alunoDAO = new AlunoDAO();

    create(aluno: AlunoCreate): boolean {
        throw new Error("Method not implemented.");
    }

    findById(id: number): any {
        return this.alunoDAO.findById(id);
    }

    findAll(): any {
        return this.alunoDAO.findAll();
    }

    update(): boolean {
        throw new Error("Method not implemented.");
    }

    delete(): boolean {
        throw new Error("Method not implemented.");
    }
}