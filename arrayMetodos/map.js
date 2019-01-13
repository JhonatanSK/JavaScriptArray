// map mapeia e envia para outro array (os 2 terão o mesmo tamanho sempre)

const nums = [1,2,3,4,5]

// map é um for 

let resultado = nums.map(function(e) {
    return e * 2
})
console.log(resultado)
// todos os valores do nums foi dobrado X2
 