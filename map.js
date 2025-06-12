const  numbers = [1, 2, 3, 4, 5];

const multiplicaPorDois = numbers.map(function(number){
    return number * 2;
})

const idades = [8, 13, 27, 30, 22, 40];
// const pares = idades.filter(function(numero){
//     return numero % 2 === 0 
// })
const somaIdades = idades.reduce(function(numero, acumulador){
    return acumulador + numero
}, 0)
console.log(somaIdades);
