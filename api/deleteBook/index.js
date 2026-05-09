// Azure Function - DELETE /api/deleteBook
// Objetivo: Excluir um livro pelo ID
// Autor: Marcos André
// Versão: 1.0

module.exports = async function (context, req) {
    const id = req.query.id || (req.body && req.body.id);

    if (!id) {
        context.res = {
            status: 400,
            body: { message: "ID do livro é obrigatório para exclusão." }
        };
        return;
    }

    context.res = {
        status: 200,
        body: {
            message: `Livro com ID ${id} excluído com sucesso!`
        }
    };
};
