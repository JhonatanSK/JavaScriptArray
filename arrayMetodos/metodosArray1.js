const pilotos = ['jhon', 'atan', 'mari', 'rima',]
pilotos.unshift('olaa')
console.log(pilotos)
//unshift adiciona na primeira parte do array

pilotos.push('haha')
console.log(pilotos)
//push adiciona na ultima linha

pilotos.splice(2, 0, 'huhu','hoho')
console.log(pilotos)

pilotos.splice(2,2)
console.log(pilotos)
// metodo splice pode remover e adicionar elementos apartir do primeiro valor do parametro e o segundo 

pilotos.pop()
console.log(pilotos)
//metodo pop remove o ultimo elemento do array

const outroArray = pilotos.slice(2)
console.log(outroArray)

//metodo slice corta o array e cria um outro apartir do parametro