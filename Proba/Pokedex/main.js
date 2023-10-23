// import './style.css'

const form = document.querySelector('form')
const datalist = document.querySelector('datalist')
const output = document.querySelector('.output')

// fetch('https://pokeapi.co/api/v2/pokemon?limit=1292')
//     .then(resp => resp.json())
//     .then(resp => {
//         for (let i = 0; i <= 1292; i++) {
//             const pokemon = resp.results[i].name;
//             console.log(pokemon)
//             const option = document.createElement('option')
//             datalist.append(option)
//             option.value = pokemon
//         }
//     })

const list = async () => {
    try {
        const resp = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1292')

        if (resp.status === 404) throw new Error('Not found')

        const data = await resp.json()

        for (let i = 0; i <= 1292; i++) {
            pokemon = data.results[i].name;
            console.log(pokemon)
            const option = document.createElement('option')
            datalist.append(option)
            option.value = pokemon
        }

    } catch (error) {
        console.error(error.message)
    }
}

list()

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const input = form.pokemon.value.toLowerCase()
    form.pokemon.value = ''

    getPokemon(input)

})

async function getPokemon(input) {

    try {

        const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/'

        const resp = await fetch(BASE_URL + input)

        if (resp.status === 404) throw new Error('Not found')

        const pokemon = await resp.json()

        const types = pokemon.types.map(({ type }) => type.name);

        const mappedPokemon = {
            id: pokemon.id,
            name: pokemon.name[0].toUpperCase() + pokemon.name.slice(1),
            height: pokemon.height,
            photo: pokemon.sprites.other.dream_world.front_default,
            weight: pokemon.weight,
            types: types
        }

        createPokemonMarkup(mappedPokemon)


    } catch (error) {
        console.error(error.message)
    }
}

function createPokemonMarkup(pokemon) {
    const { name, height, weight, photo, types, id } = pokemon;

    const articleHTML = document.createElement('article');

    articleHTML.className = 'border-white border-2 p-8 rounded shadow-md text-white flex flex-col items-center';

    let typesHTML = '';

    const mappedTypes = {
        fire: 'Fuego',
        electric: 'Eléctrico',
        flying: 'Volador',
        water: 'Agua',
        grass: 'Planta'
    }

    types.forEach((type, index) => typesHTML += `<li>Tipo ${index + 1}: ${mappedTypes[type] || type}</li>`)

    articleHTML.innerHTML = `
    <img class="mb-4 w-1/2" src="${photo}" alt="${name}">
    <h2 class="text-2xl underline">${name} - Nº - ${id}</h2>
    <ul class="my-4 list-disc ml-4 flex flex-col gap-2 w-max">
    <li>Altura: ${height}cm</li>
    <li>Peso:${weight}kg</li>
    ${typesHTML}
</ul>
`

    output.prepend(articleHTML)
}
// fetch(BASE_URL + input)
//     .then(resp => resp.json())
//     .then(pokemon => {

//         const img = pokemon.sprites.front_default
//         let name = pokemon.name
//         name = name[0].toUpperCase() + name.slice(1)
//         const id = pokemon.id
//         const altura = pokemon.height
//         const peso = pokemon.weight
//         let tipo = pokemon.types[0].type.name
//         tipo = tipo[0].toUpperCase() + tipo.slice(1)

//         const section = document.createElement('section')

//         data_poke.append(section)
//         section.innerHTML = `
//         <article class="inline-block border-white p-5 border-2 w-60">
//             <img src=${img} class="inline-block w-[50rem] " >
//                 <h2 class="font-bold text-2xl ">${name + ' - ' + id}</h2>
//                 <ul class="text-white mt-2">
//                     <li>Altura: ${altura}</li>
//                     <li>Peso: ${peso}</li>
//                     <li>Tipo: ${tipo}</li>
//                 </ul>
//         </article>`
//     })
