// Azure Function - POST /api/addBook
// Objetivo: Cadastrar um novo livro
// Autor: Marcos André
// Versão: 1.0

module.exports = async function (context, req) {
    const livro = req.body;

    if (!livro || !livro.title || !livro.subtitle || !livro.image || !livro.price) {
        context.res = {
            status: 400,
            body: { message: "Dados incompletos para cadastro." }
        };
        return;
    }

    context.res = {
        status: 201,
        body: {
            message: "Livro cadastrado com sucesso!",
            data: livro
        }
    };
};
