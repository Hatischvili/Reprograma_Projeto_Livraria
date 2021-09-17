console.log("------------------------------")
console.log("---BEM VINDO(A) LIVRARIA JS---")
console.log("------------------------------")
console.log("Categorias de livros em estoque:")
console.log("Romance, juvenil, infantil, filosofia e mitologia")
console.log("------------------------------")


const bookDatabase = require('./database')

const inputAnswer = require('readline-sync')

const welcome = inputAnswer.question('Gostaria de ver as categorias de livros?(S/N)').toLocaleLowerCase()

if(welcome === 's'){
    
    const answerBookCategory = inputAnswer.question('Gostaria de ver qual categoria de livro?').toLocaleLowerCase()

    genre = (bookDatabase) => bookDatabase.categoria === answerBookCategory 
    const tableGenre = bookDatabase.filter(genre)
    console.table(tableGenre)
    
    const recommend = inputAnswer.question('Gostaria de ver os livros recomendados?(S/N)').toLocaleLowerCase()

    if(recommend === 's'){

        recommendation = (bookDatabase) => bookDatabase.recomenda === true && bookDatabase.leu == true
        const tableRecommend = bookDatabase.filter(recommendation)
        console.table(tableRecommend)
    
    }

    const wish = inputAnswer.question('Gostaria de ver minha lista futuras leituras?(S/N)').toLocaleLowerCase()

    if(wish === 's'){
        
        wishlist = (bookDatabase) => bookDatabase.leu == false
        const tableWish = bookDatabase.filter(wishlist)
        console.table(tableWish)
    
    }

    console.log("------------------------------")
    console.log("-----Volte quando quiser!-----")
    console.log("------------------------------")

}else{
console.log("------------------------------")
console.log("-----Volte quando quiser!-----")
console.log("------------------------------")
}
