import fastify from "fastify";
import disciplina from "./routes/disciplina.js";
import aluno from "./routes/aluno.js";
import curso from "./routes/curso.js";
import professor from "./routes/professor.js";

const server = fastify({ logger: true });

// register routes
server.register((app, _, done) => {
    app.register(disciplina);
    app.register(aluno);
    app.register(professor);
    app.register(curso);

    done();
}, { prefix: '/api' });

export default server;
