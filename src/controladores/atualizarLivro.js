let { livros } = require("../dados/bancoDeDados");

const atualizarLivro = (req, res) => {
  const { id } = req.params;
  const { titulo, autor, ano, numPaginas } = req.body;

  const livro = livros.find((livro) => {
    return livro.id === Number(id);
  });

  if (!livro) {
    return res.status(404).json({ mensagem: "Não existe livro a ser substituído para o ID informado."});
  }
  if (!titulo) {
    return res.status(400).json({ mensagem: "O Titulo é obrigatorio para adicionar o livro" });
  }
  if (!autor) {
    return res.status(400).json({ mensagem: "O autor é obrigatorio para adicionar o livro" });
  }
  if (!ano) {
    return res.status(400).json({ mensagem: "O ano é obrigatorio para adicionar o livro" });
  }
  if (!numPaginas) {
   return res.status(400).json({ mensagem: "O Numero de páginas é obrigatorio para adicionar o livro"})
  }

    livro.titulo = titulo
    livro.autor = autor
    livro.ano = ano
    livro.numPaginas = numPaginas

  return res.status(201).json({ mensagem: "Livro substituído." });
};

module.exports = {
  atualizarLivro,
};
