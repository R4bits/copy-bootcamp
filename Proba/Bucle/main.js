const fruteria = ['🍎', '🍐', '🍌', '🍇']

for (let i = 0; i < fruteria.length; i++) {
    const fruta = fruteria[i]
    console.log(fruta)
}

debugger

const numeros = [2, 15, -13, 23, 75, 4, 12];
const numerosimpares = []

for (let i = 0; i < numeros.length; i++) {
    let numero = numeros[i]

    if (numero % 2 !== 0) {
        numero += 5
        numerosimpares.push(numero)
    }
}

console.log(numerosimpares)


