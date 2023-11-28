const express = require("express");
const { listaDeLivros, livroPorId } = require("./controladores/listaLivros");
const { adicionarLivro } = require("./controladores/adicionarLivro");
const { atualizarLivro } = require("./controladores/atualizarLivro");
const { atualizarRecurso } = require("./controladores/atualizarRecurso");
const { excluirLivro } = require("./controladores/removerLivro");

const rotas = express();

rotas.get("/livros", listaDeLivros);
rotas.get("/livros/:id", livroPorId);
rotas.post("/livros", adicionarLivro);
rotas.put("/livros/:id", atualizarLivro);
rotas.patch("/livros/:id", atualizarRecurso);
rotas.delete("/livros/:id",excluirLivro)

module.exports = rotas;
