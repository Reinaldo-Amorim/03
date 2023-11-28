const {livros} = require("../dados/bancoDeDados")


const listaDeLivros = (req,res) =>{
   return res.status(200).json(livros)
}

const livroPorId = (req,res) =>{
    const {id} = req.params
    
    const livro = livros.find((livro) =>{
        return livro.id === Number(id)
    })

    const verificacao = id.match(/[A-Z]/gi)

    if (verificacao){
        return res.status(400).json({mensagem: "O valor do parâmetro não é um número válido."})
    }

    if (!livro) {
        return res.status(404).json({mensagem: "Não existe livro para o ID informado."})
    }
    return res.status(200).json(livro)
}


module.exports = {
    listaDeLivros,
    livroPorId
}