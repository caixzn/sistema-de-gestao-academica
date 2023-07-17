import { bigint, char, mysqlEnum, mysqlTable, varchar } from "drizzle-orm/mysql-core";
import { pessoa } from "./pessoa.js";
import { campus } from "./campus.js";
import { InferModel, relations } from "drizzle-orm";

const UF = [ 'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'] as const;

export const endereco = mysqlTable('endereco', {
    id: bigint('id', { mode: 'bigint' }).unique().notNull().primaryKey().autoincrement(),
    pessoaId: bigint('pessoa_id', { mode: 'bigint' }),
    cep: char('cep', { length: 8 }),
    logradouro: varchar('logradouro', { length: 256 }),
    numero: varchar('numero', { length: 256 }),
    complemento: varchar('complemento', { length: 256 }),
    bairro: varchar('bairro', { length: 256 }),
    cidade: varchar('cidade', { length: 256 }),
    estado: mysqlEnum('estado', UF)
});

export const enderecoRel = relations(endereco, ({ one }) => ({
    pessoa: one(pessoa, {
        fields: [endereco.pessoaId],
        references: [pessoa.id]
    }),
    campus: one(campus, {
        fields: [endereco.id],
        references: [campus.enderecoId]
    })
}));

export type Endereco = InferModel<typeof endereco>;
export type EnderecoCreate = InferModel<typeof endereco, 'insert'>;
