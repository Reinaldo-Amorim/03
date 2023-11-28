const { livros } = require("../dados/bancoDeDados");

const atualizarRecurso = (req,res) =>{
    const { id } = req.params;
    const { titulo, autor, ano, numPaginas } = req.body;
  
    const livro = livros.find((livro) => {
      return livro.id === Number(id);
    });

    if (!livro) {
       return res.status(404).json({mensagem:  "Não existe livro a ser alterado para o ID informado."})
    }

    if (titulo) {
        livro.titulo = titulo 
    }
    if (autor) {
        livro.autor = autor
    }
    if (ano){
        livro.ano = ano
    }
    if (numPaginas){
    livro.numPaginas = numPaginas
    }
    return res.status(201).json({mensagem: "Livro alterado"})

}

module.exports = {
    atualizarRecurso
}