//primeiro modelo

const objeto = {
    nome: 'nome',
    idade: 18,
    endereco:{
        rua:'rua',
        numero:121
    },
    telefone: 20222022
} 
console.log(objeto)

// segundo modelo usando class
class Obj {
    constructor(nome = 'aaaa', sobrenome = 'sobre'){
    this.nome = nome
    this.sobrenome = sobrenome
    }
}

class Abc extends Obj{
    constructor(nome, sobrenome, maisUmNome = 'jhonn') {
        super(nome, sobrenome)
        this.maisUmNome = maisUmNome
    }
}
const primeiroObj = new Abc
const segObj = new Obj


let arraay = [primeiroObj, segObj]
console.log(arraay)


