Array.prototype.map2 = function (callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

// criei algo exatamente como o map no codigo acima 

const carrinho = [
    '{ "nome": "borracha", "preco": 3.45 }',
    '{ "nome": "caderno", "preco": 13.90 }',
    '{ "nome": "lapis", "preco": 41.22 }',
    '{ "nome": "caneta", "preco": 7.50 }'
]

const conversor = json => JSON.parse(json)
const apenasPreco = precoProduto => precoProduto.preco

let precos = carrinho.map2(conversor).map2(apenasPreco)
console.log(precos)
// retirar os preços