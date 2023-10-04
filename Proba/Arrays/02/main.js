
const auto = [`Citroen`, `Renault`, `Opel`]

auto[auto.length] = `Fiat`

console.log(auto[2])

auto[auto.length] = [`Kia`, `Audi`]

console.log(auto[4][1])

let autovar = [...auto[4]]

console.log(auto)
console.log(autovar)

