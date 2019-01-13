const caneta = {
    tamanho: 14,
    cor: 'azul',
    ponta:1.5,
    tampa: false,
}

const lapis = {
    cor: 'preto',
    tamanho: 18,
    apontado: true
}

let estojo = []

estojo = estojo.concat(lapis, caneta)

const borracha = {
    altura: 10,
    largura: 6,
    cor: 'branca'
}

estojo = estojo.concat(borracha)
console.log(estojo)

const pegarCor = cores => cores.cor

let corDosObjetos = estojo.map(pegarCor)
console.log(corDosObjetos)

