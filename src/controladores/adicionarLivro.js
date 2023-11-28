let { listagemLivros, livros } = require("../dados/bancoDeDados");

let adicionarLivro = (req, res) => {
  const { titulo, autor, ano, numPaginas } = req.body;

  if (!titulo) {
    res
      .status(400)
      .json({ mensagem: "O Titulo é obrigatorio para adicionar o livro" });
  }
  if (!autor) {
    res
      .status(400)
      .json({ mensagem: "O autor é obrigatorio para adicionar o livro" });
  }
  if (!ano) {
    res
      .status(400)
      .json({ mensagem: "O ano é obrigatorio para adicionar o livro" });
  }
  if (!numPaginas) {
    res.status(400).json({
      mensagem: "O Numero de Páginas é obrigatorio para adicionar o livro",
    });
  }

  let novoLivro = {
    id: listagemLivros++,
    titulo,
    autor,
    ano,
    numPaginas,
  };

  livros.push(novoLivro);
  res.status(201).json(novoLivro)
};

module.exports = {
  adicionarLivro,
};
