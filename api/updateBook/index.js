// Azure Function - PUT /api/updateBook
// Objetivo: Atualizar dados de um livro
// Autor: Marcos André
// Versão: 1.0

module.exports = async function (context, req) {
    const livro = req.body;

    if (!livro || !livro.id) {
        context.res = {
            status: 400,
            body: { message: "ID do livro é obrigatório para atualização." }
        };
        return;
    }

    context.res = {
        status: 200,
        body: {
            message: "Livro atualizado com sucesso!",
            data: livro
        }
    };
};
