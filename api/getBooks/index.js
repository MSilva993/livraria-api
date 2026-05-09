// Azure Function - GET /api/getBooks
// Objetivo: Retornar lista de livros (mock)
// Autor: Marcos André
// Versão: 1.0

module.exports = async function (context, req) {
    const livros = [
        { id: 1, title: "Clean Code", price: 45.90 },
        { id: 2, title: "JavaScript: The Good Parts", price: 39.50 }
    ];

    context.res = {
        status: 200,
        body: livros
    };
};
