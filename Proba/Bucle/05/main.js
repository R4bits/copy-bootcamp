

for (let i = 1; i < 51; i++) {
    const num = [i];

    if (num % 3 === 0 && num % 5 === 0) {
        console.log(`FizzBuzz`)

    } else if (num % 3 === 0) {
        console.log(`Fizz`)

    } else if (num % 5 === 0) {
        console.log(`Buzz`)
    } else console.log(num)
}