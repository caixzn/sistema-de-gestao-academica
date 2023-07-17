import { bigint, date, decimal, mysqlTable, real, serial, varchar } from "drizzle-orm/mysql-core";
import { pessoa } from "./pessoa.js";
import { InferModel, relations } from "drizzle-orm";
import { curso } from "./curso.js";

export const professor = mysqlTable('professor', {
    id: bigint('id', { mode: 'bigint' }).unique().notNull().primaryKey(),
    dataContratacao: date('data_contratacao'),
    departamento: varchar('departamento', { length: 256 }),
    salario: decimal('salario', { precision: 16, scale: 2 }),
    cursoId: bigint('curso_id', { mode: 'bigint' }),
});

export const professorRel = relations(professor, ({ one }) => ({
    pessoa: one(pessoa, {
        fields: [professor.id],
        references: [pessoa.id]
    }),
    curso: one(curso, {
        fields: [professor.cursoId],
        references: [curso.id]
    })
}));

export type Professor = InferModel<typeof professor>;
export type ProfessorCreate = InferModel<typeof professor, 'insert'>;
