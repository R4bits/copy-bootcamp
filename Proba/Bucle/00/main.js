const fruteria = ['🍎', '🍐', '🍌', '🍇']

for (let i = 0; i < fruteria.length; i++) {
    console.log(`Fruta ${i + 1}: ${fruteria[i]}`)
}

const frutasIndiceImpar = []

for (let i = 0; i < fruteria.length; i++) {

    if (i % 2 === 1) {
        frutasIndiceImpar.push(fruteria[i])
    }
}

console.log(frutasIndiceImpar)