
const numbers = [4, 8, 24, 32, 8]
const pares = []
const impares = []

for (const number of numbers) {
    const randomNum = Math.floor(Math.random() * (10 - 1 + 1) + 1)
    const multiplier = number * randomNum

    if (multiplier % 2 === 0) pares.push(multiplier)
    else impares.push(multiplier)

    console.log(number + ' x ' + randomNum + '= ' + multiplier)
}
console.log('Pares: ' + pares + '\n' + 'Impares: ' + impares)









// Ejercicio 02

// const userNum = []

// for (let trys = 5; trys === 0; trys--) {
//     let input = prompt('Dime un numero')

//     if (!userNum.includes(input)) {
//         userNum.push(input)

//     } else {
//         trys++
//         console.log('Ya has puesto este número, prueba con otro')
//     }
// }
// console.log(userNum)

// for (const number of userNum) {
//     if () {

//     }
// }