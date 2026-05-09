// Azure Function - DELETE /api/deleteBook
// Objetivo: Excluir um livro pelo ID
// Autor: Marcos André
// Versão: 1.0

module.exports = async function (context, req) {
    const id = context.bindingData.id;

    context.res = {
        status: 200,
        body: { message: `Livro ${id} excluído com sucesso` }
    };
};
