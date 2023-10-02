
const userSentence = prompt(`Dime una frase`)
const userSentenceSplit = userSentence.split(``)

let counter = 0

for (let i = 0; i < userSentenceSplit.length; i++) {

    const letra = userSentenceSplit[i]

    if (letra === 'a') {
        counter++
    } else continue
}

console.log(`Hay ${counter} "a" en tu frase: ${userSentence}.`)