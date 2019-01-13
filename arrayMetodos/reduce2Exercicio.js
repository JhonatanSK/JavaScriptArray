const alunos = [
    { nome: 'Jhon', nota: 7.5, bolsista:true },
    { nome: 'João', nota: 6.5, bolsista: false },
    { nome: 'maria', nota: 8.8, bolsista: false },
    { nome: 'ana', nota: 7.2, bolsista: true }
]
// todos são bolsisas??

const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

// tem algum bolsista?

const algumBolsistas = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsistas))



// const todosAlunos = alunos.map(a => a.bolsista).reduce(function (){
//     if (alunos.bolsista == true){
//         return true
//     }
//     else{
//         return false
//     }
// })
