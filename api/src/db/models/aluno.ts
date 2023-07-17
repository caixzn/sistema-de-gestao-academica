import { bigint, date, mysqlTable, serial } from "drizzle-orm/mysql-core";
import { pessoa } from "./pessoa.js";
import { InferModel, relations } from "drizzle-orm";
import { curso } from "./curso.js";

export const aluno = mysqlTable('aluno', {
    id: bigint('id', { mode: 'bigint' }).primaryKey().unique().notNull(),
    dataNascimento: date('data_nascimento'),
    dataIngresso: date('data_ingresso'),
    cursoId: bigint('curso_id', { mode: 'bigint' })
});

export const alunoRel = relations(aluno, ({ one }) => ({
    pessoa: one(pessoa, {
        fields: [aluno.id],
        references: [pessoa.id]
    }),
    curso: one(curso, {
        fields: [aluno.cursoId],
        references: [curso.id]
    })
}));

export type Aluno = InferModel<typeof aluno>;
export type AlunoCreate = InferModel<typeof aluno, 'insert'>;
