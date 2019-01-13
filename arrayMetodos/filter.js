// percorrer array e filtra os dados do jeito que voce quer

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'IPad pro', preco: 4199, fragil: true },
    { nome: 'Copo de vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de plastico', preco: 18.99, fragil: false }
]

console.log(produtos.filter(function(p) {
    return false
}))

const caro = produto => produto.preco >= 2000
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))
// neste console.log eu filtrei os resultados que eu queria 
//atravéz das duas arrow functions ( caro e fragil) e mostrei apenas os valores que eu queria



// console.log(produtos.filter(function(p) {
//     return p.fragil == false || p.preco > 600
// }))