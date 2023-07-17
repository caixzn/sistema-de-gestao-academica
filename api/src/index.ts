import fastify from 'fastify';
import db from './db/connection.js';
import { pessoa } from './db/models/pessoa.js';
import { migrate } from 'drizzle-orm/planetscale-serverless/migrator';

/*const server = fastify();

server.get('/', async () =>  'world');

server.listen({ port: 3000 }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening at ${address}`);
});*/

async function main() {
	await db.insert(pessoa).values({ nome: 'John', sobrenome: 'Doe', cpf: '12345678901', sexo: 'M', raca: 'branca' });
    console.log(await db.select().from(pessoa));
    process.exit(0);
}

main();