

// const edad = prompt("¿Que edad tienes?");

// if (edad < 6 && edad > 0) {
//     console.log("Menores de 6 entran gratis")

// } else if (edad <= 13 && edad >= 6) {
//     console.log("De 6 a 13 años pagan 4€")

// } else if (edad >= 14 && edad <= 65) {
//     console.log("De 14 a 65 años pagan 7€")

// } else if (edad > 65) {
//     console.log("Mayores de 65 entran gratis")

// } else {
//     console.error("Datos invalidos")
// }


let userHour = prompt("¿Que hora es?")
let userMin = prompt("¿Que minuto es?");
let userSec = prompt("¿Que segundo es?");

if (userHour <= 23 && userHour >= 0 && userMin <= 59 && userMin >= 0 && userSec <= 59 && userSec >= 0) {

    userSec++

    if (userSec === 60) {
        userMin++
        userSec = 0

        if (userMin === 60) {
            userHour++
            userMin = 0
        }

        if (userHour === 24) userHour = 0
    }

    const userTime = (`${userHour}:${userMin}:${userSec}`)

    console.log(userTime)

} else console.error("Datos invalidos")


