import { InferModel, relations } from "drizzle-orm";
import { bigint, mysqlTable, primaryKey, varchar } from "drizzle-orm/mysql-core";

export const disciplina = mysqlTable('disciplina', {
    id: bigint('id', { mode: 'bigint' }).unique().notNull().primaryKey().autoincrement(),
    nome: varchar('nome', { length: 256 })
});

export const preRequisito = mysqlTable('disciplina_pre_requisito', {
    preRequisitoId: bigint('pre_requisito_id', { mode: 'bigint' }).notNull(),
    disciplinaId: bigint('disciplina_id', { mode: 'bigint' }).notNull()
}, (table) => ({
    pk: primaryKey(table.disciplinaId, table.preRequisitoId)
}));

export const disciplinaRel = relations(disciplina, ({ many }) => ({
    preRequisito: many(preRequisito)
}));

export const disciplinaPreRequisitoRel = relations(preRequisito, ({ one }) => ({
    disciplina: one(disciplina, {
        fields: [preRequisito.disciplinaId],
        references: [disciplina.id]
    })
}));

export type Disciplina = InferModel<typeof disciplina>;
export type DisciplinaCreate = InferModel<typeof disciplina, 'insert'>;
