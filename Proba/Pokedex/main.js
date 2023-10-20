// import './style.css'

const form = document.querySelector('form')
const data_poke = document.querySelector('.data-pokemon')

form.addEventListener('submit', (event) => {
    event.preventDefault();

    form.pokemon.value
    const input = form.pokemon.value.toLowerCase()

    console.log(input)

    const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/'

    fetch(BASE_URL + input)
        .then(resp => {
            return resp.json()
        })
        .then(pokemon => {

            const img = pokemon.sprites.front_default
            let name = pokemon.name
            name = name[0].toUpperCase() + name.slice(1)
            const id = pokemon.id
            const altura = pokemon.height
            const peso = pokemon.weight
            let tipo = pokemon.types[0].type.name
            tipo = tipo[0].toUpperCase() + tipo.slice(1)

            form.pokemon.value = ''

            const section = document.createElement('section')

            data_poke.append(section)
            section.innerHTML = `
            <article class="inline-block border-white p-5 border-4 w-60">
                <img src=${img} class="inline-block w-[50rem] " >
                    <h2 class="font-bold text-2xl ">${name + ' - ' + id}</h2>
                    <ul class="text-white mt-2">
                        <li>Altura: ${altura}</li>
                        <li>Peso: ${peso}</li>
                        <li>Tipo: ${tipo}</li>
                    </ul>
            </article>`

            console.log(pokemon)
        })

})