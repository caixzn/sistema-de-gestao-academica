import { bigint, date, decimal, mysqlTable, primaryKey, real, serial, varchar } from "drizzle-orm/mysql-core";
import { pessoa } from "./pessoa.js";
import { InferModel, relations } from "drizzle-orm";
import { curso } from "./curso.js";

export const professor = mysqlTable('professor', {
    id: bigint('id', { mode: 'number' }).unique().notNull().primaryKey(),
    dataContratacao: date('data_contratacao'),
    departamento: varchar('departamento', { length: 256 }),
    salario: decimal('salario', { precision: 16, scale: 2 })
});

export const professorRel = relations(professor, ({ one, many }) => ({
    pessoa: one(pessoa, {
        fields: [professor.id],
        references: [pessoa.id]
    }),
    cursos: many(curso)
}));

export const professorCurso = mysqlTable('professor_curso', {
    professorId: bigint('professor_id', { mode: 'number' }).notNull(),
    cursoId: bigint('curso_id', { mode: 'number' }).notNull()
}, (table) => ({
    pk: primaryKey(table.professorId, table.cursoId)
}));

export const professorCursoRel = relations(professorCurso, ({ one }) => ({
    professor: one(professor, {
        fields: [professorCurso.professorId],
        references: [professor.id]
    }),
    curso: one(curso, {
        fields: [professorCurso.cursoId],
        references: [curso.id]
    })
}));

export type ProfessorSchema = InferModel<typeof professor, 'insert'>;
