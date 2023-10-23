const form = document.querySelector('form')
const data_poke = document.querySelector('main')
const datalist = document.querySelector('datalist')

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

    const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/'

    try {
        const card = async (BASE_URL, input) => {
            const resp = await fetch(BASE_URL + input)

        }catch (error) {
            console.error(error.message)
        }

    }}


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
})