const carrinho = [
    '{ "nome": "borracha", "preco": 3.45 }',
    '{ "nome": "caderno", "preco": 13.90 }',
    '{ "nome": "lapis", "preco": 41.22 }',
    '{ "nome": "caneta", "preco": 7.50 }'
]

const conversor = json => JSON.parse(json)
const apenasPreco = precoProduto => precoProduto.preco

let precos = carrinho.map(conversor).map(apenasPreco)
console.log(precos)
// retirar os preços de um array


// somei todos os preços do array
let attr = 0
for (let i = 0; i < precos.length; i++){
    attr += precos[i]
}
console.log(attr)

const apenasProduto = function(produto){
    return produto.nome
}

//const apenasProduto = produto => produto.nome
let produtos = carrinho.map(conversor).map(apenasProduto)
console.log(produtos)

// na linha 23 a 25 utilizei função anonima, já na linha 27 utilizei arrow function, as 2 estão corretas



