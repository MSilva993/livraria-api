// Azure Function - GET /api/getBooks
// Objetivo: Retornar lista de livros (mock)
// Autor: Marcos André
// Versão: 1.0

module.exports = async function (context, req) {

    const livros = [
        {
            id: 1,
            title: "Clean Code",
            subtitle: "A Handbook of Agile Software Craftsmanship",
            image: "https://covers.openlibrary.org/b/isbn/9780132350881-L.jpg",
            price: 29.99
        },
        {
            id: 2,
            title: "The Pragmatic Programmer",
            subtitle: "Your Journey to Mastery",
            image: "https://covers.openlibrary.org/b/isbn/9780135957056-L.jpg",
            price: 39.99
        }
    ];

    context.res = {
        status: 200,
        body: livros
    };
};
