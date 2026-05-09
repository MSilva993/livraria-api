// Azure Function - PUT /api/updateBook
// Objetivo: Atualizar dados de um livro
// Autor: Marcos André
// Versão: 1.0

module.exports = async function (context, req) {
    const id = context.bindingData.id;
    const dados = req.body;

    if (!dados) {
        context.res = {
            status: 400,
            body: { error: "Dados inválidos" }
        };
        return;
    }

    context.res = {
        status: 200,
        body: { message: `Livro ${id} atualizado`, data: dados }
    };
};
