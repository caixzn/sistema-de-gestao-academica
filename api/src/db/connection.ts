import 'dotenv/config';
import { PlanetScaleConnection, drizzle } from "drizzle-orm/planetscale-serverless";
import { connect } from "@planetscale/database";
import { migrate } from 'drizzle-orm/planetscale-serverless/migrator';
import * as aluno from './schemas/aluno.js';
import * as campus from './schemas/campus.js';
import * as curso from './schemas/curso.js';
import * as disciplina from './schemas/disciplina.js';
import * as endereco from './schemas/endereco.js';
import * as oferta from './schemas/oferta.js';
import * as pessoa from './schemas/pessoa.js';
import * as professor from './schemas/professor.js';
import * as telefone from './schemas/telefone.js';

const connection = connect({
    host: process.env.DATABASE_HOST,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD
});

const db = drizzle(connection, { schema: { ...aluno, ...campus, ...curso, ...disciplina, ...endereco, ...oferta, ...pessoa, ...professor, ...telefone } });

await migrate(db, { migrationsFolder: './src/db/migrations' });

export default db;
