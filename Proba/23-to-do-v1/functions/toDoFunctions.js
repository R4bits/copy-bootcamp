// Mini "base de datos"
const tareas = [
    {
        id: 1,
        tarea: 'Estudiar JavaScript',
    },
    {
        id: 2,
        tarea: 'Pasear a las perras. 🐶'
    }
];

let contadorId = 2;

function leerTareas () {
    console.clear();
    for (const tarea of tareas) {
        console.log(`${tarea.id}: ${tarea.tarea}`);
    }
}

function crearTarea () {

    // Pedimos el texto y comprobamos que sea un string
    let textoNuevaTarea;
    do {
        textoNuevaTarea = prompt('Dime la texto tarea.');

    } while (isNaN(textoNuevaTarea) === false);

    // Sumarle uno a el contador id
    contadorId++;
    
    // generamos el objeto de la nueva tarea
    const nuevaTarea = {
        id: contadorId,
        tarea: textoNuevaTarea
    };


    // Añadimos la tarea anuestra "BBDD"
    tareas.push(nuevaTarea);


    // Mensaje de que todo ha ido bien
    console.log(`La tarea "${textoNuevaTarea}" ha sido añadida.`);
}

function actualizarTarea () {
    
    // mostrar todos los usuarios

    // pedir el id del que quieres actualizar

    // buscamos en e array el que coincide con tu ID


    // dentro del IF es que hay coincidencia
        // pedir otro prompt con el nuevo texto de la tarea

    // actualizar la tarea con el nuevo texto

    // Si no ha encontrado ninguna tarea con ese ID mensaje de no se ha encontrado

    // fin


}

function borrarTarea () {
    
    // mostramos las tareas en pantalla
    console.clear();
    leerTareas();


    // pedimos el ID de la tarea que queremos borrar
    let idTareaBorrar;
    do {
        idTareaBorrar = prompt('Dime el ID de la tarea que quieres borrar.');

    } while (isNaN(idTareaBorrar) || idTareaBorrar === null || idTareaBorrar.trim() === '' );
    idTareaBorrar = Number(idTareaBorrar);

    // variable auxiliar que nos ayuda
    let seHaEncontrado = false;

    // recorrer el array de tareas
    for (let i = 0; i < tareas.length; i++) {

        const tarea = tareas[i];

        // preguntar si alguno de ellos tiene el id que me han pasado
        if (tarea.id === idTareaBorrar) {

            // aqui dentro tengo exactamente el índice de la tarea que quieres borrar.
            seHaEncontrado = true;
            // borramos la tarea usando el índice

            tareas.splice(i, 1);

            console.log(`La tarea con el id ${idTareaBorrar} ha sido borrada.`);
        }

    }


    if (!seHaEncontrado) {
        const estaSeguro = confirm(`La tarea con el ID ${idTareaBorrar} no existe. 
        ¿Quieres darme otro ID?`);

        if (estaSeguro) {
            borrarTarea();
        }
    }

}

export { leerTareas, crearTarea, actualizarTarea, borrarTarea };