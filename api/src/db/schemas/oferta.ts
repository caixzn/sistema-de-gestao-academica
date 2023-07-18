import { InferModel, relations } from "drizzle-orm";
import { bigint, decimal, mysqlEnum, mysqlTable, primaryKey, varchar, year } from "drizzle-orm/mysql-core";
import { professor } from "./professor.js";
import { aluno } from "./aluno.js";
import { disciplina } from "./disciplina.js";

export const oferta = mysqlTable('disciplina_oferta', {
    id: bigint('id', { mode: 'bigint' }).unique().notNull().primaryKey().autoincrement(),
    disciplinaId: bigint('disciplina_id', { mode: 'bigint' }).notNull(),
    professorId: bigint('professor_id', { mode: 'bigint' }).notNull(),
    ano: year('ano'),
    semestre: varchar('semestre', { length: 16 })
});

export const ofertaRel = relations(oferta, ({ one, many }) => ({
    disciplina: one(disciplina, {
        fields: [oferta.disciplinaId],
        references: [disciplina.id]
    }),
    professor: one(professor, {
        fields: [oferta.professorId],
        references: [professor.id]
    }),
    alunos: many(alunoCursaOferta)
}));

export const alunoCursaOferta = mysqlTable('aluno_cursa_oferta', {
    id: bigint('id', { mode: 'bigint' }).unique().notNull().primaryKey().autoincrement(),
    alunoId: bigint('aluno_id', { mode: 'bigint' }).notNull(),
    ofertaId: bigint('oferta_id', { mode: 'bigint' }).notNull(),
    nota: decimal('notal', { precision: 2, scale: 1 }),
    presenca: decimal('presenca', { precision: 3, scale: 2 })
});

export const alunoCursaOfertaRel = relations(alunoCursaOferta, ({ one }) => ({
    aluno: one(aluno, {
        fields: [alunoCursaOferta.alunoId],
        references: [aluno.id]
    }),
    oferta: one(oferta, {
        fields: [alunoCursaOferta.ofertaId],
        references: [oferta.id]
    })
}));
