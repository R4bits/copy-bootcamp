// //? Objetos

// //* Valores primitivos (pasados por VALOR)

// //? String
// //? Number
// //? Boolean
// //? null
// //? undefined

// //* Valores NO PRIMITIVOS (pasados por REFERENCIA - "papelito")

// //? Array
// //? Function

// //? OBJECT

// //* ========================================== *//
// //* ========================================== *//

// const platano = {
//     nombre: 'plátano',
//     cantidad: 5,
//     tieneMotitas: true,
//     procedencia: 'Canarias',
//     tiendas: [
//         'Lidl',
//         'Dia',
//         'Mercadona',
//         [
//             'Condis Life',
//             'Condis Express'
//         ],
//         {
//             nombre: 'Carrefour',
//             ciudad: 'Barcelona'
//         }
//     ],
//     sabor: {
//         dulce: 3,
//         salado: 2,
//         amargo: 0
//     }
// }



// //* Cómo leemos datos de un objeto  -->  .

// console.log(platano.procedencia);

// console.log(platano.color);

// //? A partir de ahora ya puedes viajar por los datos como te dé la gana usando corchetes y puntos

// console.log(platano.tiendas[1]);

// console.log(platano.tiendas[4].ciudad);


// //* Puedo crear un nuevo valor dentro de un objeto
// platano.color = 'amarillo';

// //* También puedo modificar una que ya existe
// platano.cantidad = 15;

// console.log(platano);


// //* OTRA FORMA DE LLAMAR A LAS PROPIEDADES



// const nums = [2, 15, -13, 23, 75, 4, 12];

// const user1 = {
//     username: 'ivluengo',
//     email: 'ivluengo@gmail.com',
//     isAdmin: true
// }

// console.log(nums);
// console.log(user1);

// console.log(nums['1']);

// console.log(user1['isAdmin']);
// console.log(user1.isAdmin);


// const valorSeleccionado = 'username';


// console.log(user1[valorSeleccionado])


// //* Esto es porque las propiedades de un objeto las puedes escribir como un string

// const user2 = {
//     'username': 'carliñus',
//     email: 'carlos@email.com',
//     'isAdmin': false,
//     'esta casado': true
// }

// console.log(user2['esta casado']);

// //* Por último, podemos crear propiedades nuevas usando también los corchetes



// const nuevaPropiedad = 'edad';
// const valorPropiedad = '35'
// const user3 = {
//     username: 'xavi65',
//     [nuevaPropiedad]: valorPropiedad
// }

// console.log(user3);


// //* RECORRER UN OBJETO

// for (const nombrePropiedad in platano) {
//     // console.log(nombrePropiedad);

//     console.log(`${nombrePropiedad} -> ${platano[nombrePropiedad]}`);
// }

//* ========================================== *//
//* ========================================== *//


const luke = {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '19BBY',
    gender: 'male',
    homeworld: 'https://swapi.dev/api/planets/1/',
    films: [
        'https://swapi.dev/api/films/2/',
        'https://swapi.dev/api/films/6/',
        'https://swapi.dev/api/films/3/',
        'https://swapi.dev/api/films/1/',
        'https://swapi.dev/api/films/7/'
    ],
    species: [
        'https://swapi.dev/api/species/1/'
    ],
    vehicles: [
        'https://swapi.dev/api/vehicles/14/',
        'https://swapi.dev/api/vehicles/30/'
    ],
    starships: [
        'https://swapi.dev/api/starships/12/',
        'https://swapi.dev/api/starships/22/'
    ],
    created: '2014-12-09T13:50:51.644000Z',
    edited: '2014-12-20T21:17:56.891000Z',
    url: 'https://swapi.dev/api/people/1/'
}

// Imprimir en consola

// "Nombre: Luke Skywalker"
// "Altura: 172"



// cambiale el color de pelo de "blond" a "brown"



// Listad en consola todas las "url" de las peliculas en las que sale

// "Peli 1:  https://-......"
// "Peli 2:  https://-......"


// imprime en consola el color de ojos usando los corchetes en lugar del punto


console.log('Nombre: ' + luke.name + "\nAltura: " + luke.height)

luke.hair_color = 'brown'

console.log(luke.films)

console.log(luke[eye_color])