const maintitle = document.createElement(`h1`)

document.body.prepend(maintitle)

const h1 = document.querySelector('h1')

h1.innerText = `Primera vez tocando HTML desde JavaScript`

const newButton = document.createElement(`button`)

h1.after(newButton)

const button = document.querySelector('button')

button.innerText = `Haz click aquí`

button.className = `rounded`

button.style.cssText = `
    background-color: tomato;
    color: white;
`

button.setAttribute(`data-id`, `12345`)
h1.setAttribute(`title`, `Soy un título`)