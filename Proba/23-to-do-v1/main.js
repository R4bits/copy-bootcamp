import { actualizarTarea, borrarTarea, crearTarea, leerTareas } from './functions/toDoFunctions.js';
const prompt = require('prompt');

// // Mini "base de datos"
// const tareas = [
//     {
//         id: 1,
//         tarea: 'Estudiar JavaScript'
//     },
//     {
//         id: 2,
//         tarea: 'Pasear a las perras. 🐶'
//     }
// ];



// MENU
let seleccion;

do {
    seleccion = prompt(`
        ¡Bienvenid@ a tu lista de tareas 1.0!
        ¿Qué quieres hacer?
        (C) Crear una nueva tarea
        (R) Leer tus tareas
        (U) Actualizar una tarea
        (D) Borrar una tarea
        (X) Salir
    `);

    if (seleccion === 'r') {

        leerTareas();

    } else if (seleccion === 'c') {
        crearTarea();
    } else if (seleccion === 'u') {
        actualizarTarea();
    } else if (seleccion === 'd') {
        borrarTarea();
    } else if (seleccion === 'x' || seleccion === null) {
        console.log('¡Adios!');
        break;
    }

} while (true)
