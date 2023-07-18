import { bigint, char, mysqlEnum, mysqlTable, varchar } from "drizzle-orm/mysql-core";
import { pessoa } from "./pessoa.js";
import { InferModel, relations } from "drizzle-orm";

export const telefone = mysqlTable('telefone', {
    id: bigint('id', { mode: 'bigint' }).unique().notNull().primaryKey().autoincrement(),
    pessoaId: bigint('pessoa_id', { mode: 'bigint' }),
    codPais: char('cod_pais', { length: 3 }).notNull(),
    ddd: varchar('ddd', { length: 16 }).notNull(),
    numero: varchar('numero', { length: 16 }).notNull(),
});

export const telefoneRel = relations(telefone, ({ one }) => ({
    pessoa: one(pessoa, {
        fields: [telefone.pessoaId],
        references: [pessoa.id]
    })
}));

export type TelefoneSchema = InferModel<typeof telefone, 'insert'>;
