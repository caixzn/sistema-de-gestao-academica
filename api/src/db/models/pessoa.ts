import { mysqlTable, mysqlEnum, varchar, char, bigint } from 'drizzle-orm/mysql-core';
import { InferModel, relations } from 'drizzle-orm';
import { aluno } from './aluno.js';
import { professor } from './professor.js';
import { endereco } from './endereco.js';

export const pessoa = mysqlTable('pessoa', {
    id: bigint('id', { mode: 'bigint' }).unique().notNull().primaryKey().autoincrement(),
    nome: varchar('nome', { length: 256 }),
    sobrenome: varchar('sobrenome', { length: 256 }),
    cpf: char('cpf', { length: 11 }).notNull().unique(),
    sexo: mysqlEnum('sexo', ['M', 'F', 'O']),
    raca: varchar('raca', { length: 256 })
})

export const pessoaRel = relations(pessoa, ({ one, many }) => ({
    aluno: one(aluno, {
        fields: [pessoa.id],
        references: [aluno.id]
    }),
    professor: one(professor, {
        fields: [pessoa.id],
        references: [professor.id]
    }),
    enderecos: many(endereco)
}));

export type Pessoa = InferModel<typeof pessoa>;
export type PessoaCreate = InferModel<typeof pessoa, 'insert'>;
