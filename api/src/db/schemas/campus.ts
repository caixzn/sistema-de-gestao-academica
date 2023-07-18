import { InferModel, relations } from "drizzle-orm";
import { bigint, mysqlTable, serial, varchar } from "drizzle-orm/mysql-core";
import { endereco } from "./endereco.js";
import { curso } from "./curso.js";

export const campus = mysqlTable('campus', {
    id: bigint('id', { mode: 'bigint' }).unique().notNull().primaryKey().autoincrement(),
    nome: varchar('nome', { length: 256 }),
    enderecoId: bigint('endereco_id', { mode: 'bigint'})
});

export const campusRel = relations(campus, ({ one, many }) => ({
    cursos: many(curso),
    endereco: one(endereco, {
        fields: [campus.enderecoId],
        references: [endereco.id]
    })
}));

export type CampusSchema = InferModel<typeof campus, 'insert'>;
