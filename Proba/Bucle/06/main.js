
const secretNumber = Math.floor(Math.random() * 101)
let userWin = false

for (let trys = 6; (trys != 0 && userWin == false); trys--) {
    let userNum = Number(prompt('Dime un numero del 0 al 100'))

    if (userNum === secretNumber) {
        console.log('Has acertado!, el numero secreto era:', secretNumber)
        break

    } else if (userNum < secretNumber) {
        console.log(`Más`)

    } else console.log('Menos')

}