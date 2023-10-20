// const arrayFrutas = [
//   {
//     nombre: 'plátano',
//     procedencia: 'Canarias',
//     cantidad: 5,
//     emoticono: '🍌'
//   },
//   {
//     nombre: 'manzana',
//     procedencia: 'Marruecos',
//     cantidad: 2,
//     emoticono: '🍎'
//   },
//   {
//     nombre: 'uvas',
//     procedencia: 'La Rioja',
//     cantidad: 10,
//     emoticono: '🍇'
//   },
//   {
//     nombre: 'aguacate',
//     procedencia: 'Perú',
//     cantidad: 0,
//     emoticono: '🥑'
//   },
//   {
//     nombre: 'pera',
//     procedencia: 'Toledo',
//     cantidad: 7,
//     emoticono: '🍐'
//   },
//   {
//     nombre: 'sandía',
//     procedencia: 'Marruecos',
//     cantidad: 0,
//     emoticono: '🍉'
//   }
// ]

// //* Filtra en un array nuevo todas las frutas que tengan más de 5 unidades

// console.log(arrayFrutas.filter(fruta => fruta.cantidad > 5));

// console.log('\n\n\n\n\n');

// //* Filtra todas las frutas que sean de Marruecos

// console.log(arrayFrutas.filter(fruta => fruta.procedencia === 'Marruecos'))

// console.log('\n\n\n\n\n');

// //* Encuentra la fruta que tenga menos de 5 unidades y luego imprime su emoticono en consola

// arrayFrutas.filter(fruta => 
//   if (fruta.cantidad < 5) {
//   console.log(fruta.emoticono)
// }
// )

// console.log('\n\n\n\n\n');

// //* Encuentra la fruta que venga de Canarias y súmale 2 a su cantidad

// arrayFrutas.filter((fruta) => {
//   if (fruta.procedencia === 'Canarias')
//     fruta.cantidad += 2
// })
// console.log(arrayFrutas.procedencia === 'Canarias');

// console.log('\n\n\n\n\n');

const peliculas = [
  {
    titulo: 'El Señor de los Anillos',
    genero: ['Aventuras', 'Acción'],
    duracion: 250,
    year: 2001,
    director: 'Peter Jackson'
  },
  {
    titulo: 'Harry Potter',
    genero: ['Aventuras', 'Fantasía'],
    duracion: 151,
    year: 2001,
    director: 'Chris Columbus'
  },
  {
    titulo: 'Troya',
    genero: ['Histórica', 'Acción'],
    duracion: 132,
    year: 2004,
    director: 'Wolfgang Petersen'
  },
  {
    titulo: 'Iron Man',
    genero: ['Ciencia Ficción', 'Acción'],
    duracion: 126,
    year: 2008,
    director: 'Jon Favreau'
  },
  {
    titulo: 'E.T.',
    genero: ['Aventuras', 'Ciencia Ficción'],
    duracion: 115,
    year: 1982,
    director: 'Steven Spielberg'
  },
  {
    titulo: 'Los Goonies',
    genero: ['Aventuras', 'Comedia'],
    duracion: 114,
    year: 1985,
    director: 'Richard Donner'
  },
  {
    titulo: 'Algo Pasa con Mary',
    genero: ['Comedia', 'Comedia Romántica'],
    duracion: 119,
    year: 1998,
    director: 'Málaga'
  },
  {
    titulo: 'Hook',
    genero: ['Aventuras', 'Fantasía'],
    duracion: 142,
    year: 1991,
    director: 'Madrid'
  }
];

// //* 1.- Vamos a imprimir todas los títulos de las películas con un número delante.

// /*javascript
// // 1.- El Señor de los Anillos
// // 2.- Harry Potter
// // ...
// */

// peliculas.forEach((pelicula, i) => console.log(`${i + 1}.- ${pelicula.titulo}`));

// console.log('\n\n\n\n\n');


// //* 2.- Filtra todas las películas que sean más modernas que el año 2000 y imprime el array por consola

// console.log(peliculas.filter((pelicula) => pelicula.year > 2000))

// console.log('\n\n\n\n\n');


// //* 3.- Filtra las películas por genero 'Fantasía'

// console.log(peliculas.filter((pelicula) => pelicula.genero.includes('Fantasía')))

// console.log('\n\n\n\n\n');


// //* 4.- Vamos a ENCONTRAR una película de 'Wolfgang Petersen' y guardarla en una variable

// console.log(peliculas.filter((pelicula) => pelicula.director === 'Wolfgang Petersen'))

// console.log('\n\n\n\n\n');


// //* 5.- Vamos a MODIFICAR cada duración de las películas y sumarle a todas 100 minutos

// console.log(peliculas.filter((pelicula) => pelicula.duracion += 100))

// console.log('\n\n\n\n\n');


// //* 6.- Vamos a AÑADIR a todas las películas la propiedad `rating` que empezará con el valor 5 excepto 'Hook' que tendrá un 10

// peliculas.map((pelicula) => {
//   if (pelicula.titulo === 'Hook') {
//     pelicula.rating = 10
//   } else { pelicula.rating = 5 }
// })
// console.log(peliculas);

// console.log('\n\n\n\n\n');


// const directoresUpper = []

// peliculas.forEach((pelicula) => {
//   console.log(pelicula.director.split(' '))
// })


const movieyear = peliculas.sort((peliculaA, peliculaB) => (peliculaB.year - peliculaA.year))

console.log(movieyear)

console.log('\n\n\n\n\n');

const movieDirector = peliculas.sort((peliA, peliB) => {
  const peliculaA = peliA.director.toLowerCase();
  const peliculaB = peliB.director.toLowerCase();
  if (peliculaA > peliculaB) return 1
  if (peliculaA < peliculaB) return -1
  return 0
})

console.log(movieDirector)

console.log('\n\n\n\n\n');

const peliTerror = peliculas.some((pelicula) => pelicula.genero.includes('Terror'))

console.log('Hay peliculas de terror? ' + peliTerror)

console.log('\n\n\n\n\n');

const peli2Hour = peliculas.every((pelicula) => pelicula.duracion > 120)

console.log('Todas las peliculas duran más de 2 horas? ' + peliTerror)