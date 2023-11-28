let { livros } = require("../dados/bancoDeDados")

const excluirLivro = (req,res) =>{
    const {id} = req.params

    const indexLivro = livros.findIndex((index) =>{
        return index.id === Number(id)
    })

    if (indexLivro < 0) {
       return res.status(404).json({mensagem: "Não existe livro a ser removido para o ID informado."})
    }

   const livrosExcluido = livros.splice(indexLivro,1)[0]

    return res.status(200).json({mensagem:"Livro removido."})
}

module.exports = {
    excluirLivro,
}