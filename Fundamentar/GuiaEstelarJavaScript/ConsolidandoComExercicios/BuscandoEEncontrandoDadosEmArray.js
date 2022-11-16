/*
    ### Buscando e encontrando dados em arrays

    Baseado no Array de Livros por Categorias abaixo, faça os seguintes desafios

        * Contar o número de categorias e o número de livros em cada categoria 
        * Contar o número de autores
        * Mostrar livros de autor Augusto Cury
        * Transformar a function acima em uma function que irá receber o nome de autor e devolver os livros desse autor.
*/
const books_by_category = [
    {
        category : "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            }
        ],
    },
    {
        category : "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            }
        ],
    },
]

console.log(books_by_category.length) // 2
for(var categoria of books_by_category){
    console.log(categoria.books.length) // 3 e 3
}
console.log(books_by_category[1].books[1].author) // Augusto Cury
let autor = []
for(var prateleira of books_by_category){
    for(var livro of prateleira.books){
        if (autor.indexOf(livro.author) >= 0){} // limitar as repetições no array
        else{
        autor.push(livro.author)}
    }
}
let total = 0
let somas = 0  


console.log(autor.length) // 5

let busca = "Augusto Cury"
let title = []
for(var prateleira of books_by_category){
    for(var livro of prateleira.books){
        title.push(livro.title)
    }
}
function busca_titulo_por_autor(busca){
    for(var prateleira of books_by_category){
        for(var livro of prateleira.books){
            if(busca == livro.author){
                console.log(livro.title) // Você é Insubstituível // Ansiedade - Como enfrentar o mal do século
}
}
}
return
}
busca_titulo_por_autor(busca)