import { bigint, date, mysqlTable, primaryKey, serial } from "drizzle-orm/mysql-core";
import { pessoa } from "./pessoa.js";
import { InferModel, relations } from "drizzle-orm";
import { curso } from "./curso.js";
import { alunoCursaOferta } from "./oferta.js";

export const aluno = mysqlTable('aluno', {
    id: bigint('id', { mode: 'number' }).primaryKey().unique().notNull(),
    dataNascimento: date('data_nascimento'),
    dataIngresso: date('data_ingresso')
});

export const alunoRel = relations(aluno, ({ one, many }) => ({
    pessoa: one(pessoa, {
        fields: [aluno.id],
        references: [pessoa.id]
    }),
    cursos: many(curso),
    ofertasCursadas: many(alunoCursaOferta)
}));

export const alunoCurso = mysqlTable('aluno_curso', {
    alunoId: bigint('aluno_id', { mode: 'number' }).notNull(),
    cursoId: bigint('curso_id', { mode: 'number' }).notNull()
}, (table) => ({
    pk: primaryKey(table.alunoId, table.cursoId)
}));

export const alunoCursoRel = relations(alunoCurso, ({ one }) => ({
    aluno: one(aluno, {
        fields: [alunoCurso.alunoId],
        references: [aluno.id]
    }),
    curso: one(curso, {
        fields: [alunoCurso.cursoId],
        references: [curso.id]
    })
}));

export type AlunoSchema = InferModel<typeof aluno, 'insert'>;
