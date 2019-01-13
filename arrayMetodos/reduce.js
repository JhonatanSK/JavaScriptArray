//reduce é um metodo que acumula varios valores e retorna eles no fim ( += )

const alunos = [
    { nome: 'Jhon', nota: 7.5, bolsista:true },
    { nome: 'João', nota: 6.5, bolsista: false },
    { nome: 'maria', nota: 8.8, bolsista: false },
    { nome: 'ana', nota: 7.2, bolsista: true }
]

console.log(alunos.map(a => a.nota))

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, total){
    console.log(acumulador, total)
    return acumulador + total
})

console.log(resultado)