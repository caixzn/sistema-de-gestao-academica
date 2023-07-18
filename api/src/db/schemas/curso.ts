import { bigint, mysqlTable, serial, varchar } from "drizzle-orm/mysql-core";
import { campus } from "./campus.js";
import { InferModel, relations } from "drizzle-orm";
import { aluno } from "./aluno.js";
import { professor } from "./professor.js";
import { disciplina } from "./disciplina.js";

export const curso = mysqlTable('curso', {
    id: bigint('id', { mode: 'bigint' }).unique().notNull().primaryKey().autoincrement(),
    nome: varchar('nome', { length: 256 }),
    campusId: bigint('campus_id', { mode: 'bigint' })
});

export const cursoRel = relations(curso, ({ one, many }) => ({
    campus: one(campus, {
        fields: [curso.campusId],
        references: [campus.id]
    }),
    disciplinas: many(disciplina),
    alunos: many(aluno),
    professores: many(professor)
}));

export type CursoSchema = InferModel<typeof curso, 'insert'>;
