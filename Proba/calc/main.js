// const sumar = document.querySelector(`.sumar`)
// const restar = document.querySelector(`.restar`)
// const multiplicar = document.querySelector(`.multiplicar`)
// const dividir = document.querySelector(`.dividir`)

const InputNum1 = document.querySelector('.InputNum1')
const InputNum2 = document.querySelector(`.InputNum2`)

const botones = document.querySelector(`.botones`)

const result = document.querySelector(`.result>h3`)

let number1

InputNum1.addEventListener(`change`, (event) => {
    number1 = Number(InputNum1.value)
})

let number2

InputNum2.addEventListener(`change`, (event) => {
    number2 = Number(InputNum2.value)
})

botones.addEventListener(`click`, (event) => {
    const buttonID = event.target.id

    if (buttonID === `suma`) {
        result.innerText = number1 + number2

    } else if (buttonID === `resta`) {
        result.innerText = number1 - number2

    } else if (buttonID === `multi`) {
        result.innerText = number1 * number2

    } else if (buttonID === `divi`) {
        const roundNumber = number1 / number2
        result.innerText = roundNumber.toFixed(2)
    }
})

// sumar.addEventListener(`click`, (click) => {
//     result.innerText = `
//     Resultado
//     ${number1} + ${number2}`
// })

// restar.addEventListener(`click`, (click) => {
//     result.innerText = `
//     ${number1} - ${number2}`
// })

// multiplicar.addEventListener(`click`, (click) => {
//     result.innerText = `
//     ${number1} * ${number2}`
// })

// dividir.addEventListener(`click`, (click) => {
//     result.innerText = `
//     ${number1} / ${number2}`
// })