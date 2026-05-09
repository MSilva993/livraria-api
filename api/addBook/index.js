// Azure Function - POST /api/addBook
// Objetivo: Cadastrar um novo livro
// Autor: Marcos André
// Versão: 1.0

module.exports = async function (context, req) {
    const book = req.body;

    if (!book || !book.title) {
        context.res = {
            status: 400,
            body: { error: "Dados inválidos" }
        };
        return;
    }

    context.res = {
        status: 201,
        body: { message: "Livro criado com sucesso", data: book }
    };
};
