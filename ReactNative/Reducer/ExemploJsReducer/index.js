const numeros = [1, 2, 3, 4, 5]

const reducer = (valorJaSomado, numero) => valorJaSomado + numero

const somatorio = numeros.reduce(reducer, 0)

console.log(somatorio);