
const secretNumber = Math.floor(Math.random() * 101)
let userWin = false
let userNum

// || userNum.trim() === ' ');

for (let trys = 6; (trys !== 0 && userWin === false); trys--) {

    do {
        userNum = prompt('Dime un numero del 0 al 100')
    } while (userNum !== null || isNaN(userNum) || userNum > 0 || userNum < 100)

    userNum = Number(userNum)

    if (userNum === secretNumber) {
        console.log('Has acertado!, el numero secreto era:', secretNumber)
        break

    } else if (userNum < secretNumber) {
        console.log(`Más`)

    } else console.log('Menos')
}
