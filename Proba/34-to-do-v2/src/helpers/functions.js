import { nanoid } from 'nanoid';

import { toDoList, inputTask, itemsLeftOutput } from '../main';
import updateItemsLeft from './updateItemsLeft';

let toDos = [
    {
        id: nanoid(),
        task: 'Estudiar JavaScript',
        isCompleted: false
    },
    {
        id: nanoid(),
        task: 'Pasear a las perras. 🐶',
        isCompleted: true
    },
    {
        id: nanoid(),
        task: 'Comprar el pan',
        isCompleted: true
    }
];



function createToDo(toDo) {
    const article = document.createElement('article');

    article.className = 'toDo-item bg-white w-full px-4 py-2  text-slate-600 flex items-center border first:rounded-t last:rounded-b';

    const radioIcon = toDo.isCompleted
        ? 'check_circle'
        : 'radio_button_unchecked';

    const completedClasses = toDo.isCompleted
        ? 'line-through text-slate-400'
        : 'text-slate-600';

    article.innerHTML = `
        <button class="relative top-1 mr-2 hover:transform hover:scale-125 transition-transform">
            <span data-complete class="material-symbols-outlined text-purple-400">
                ${radioIcon}
            </span>
        </button>
        <span class="text-sm mr-auto ${completedClasses}">
            ${toDo.task}
        </span>
        <span data-delete class="material-symbols-outlined cursor-pointer hover:transform hover:scale-125 transition-transform">
            close
        </span>
    `;

    article.setAttribute('data-id', toDo.id);

    // justo aquí, en memoria tengo el boton de completar y el botón de borrar
    const completeButton = article.querySelector('[data-complete]');
    const deleteButton = article.querySelector('[data-delete]');

    completeButton.addEventListener('click', () => completeUncompleteToDo(toDo.id));
    deleteButton.addEventListener('click', () => deleteToDo(toDo.id));


    return article;

}

function printToDos(arrayToDos = toDos) {
    // borrar todo el listado de toDos
    toDoList.innerHTML = '';

    //recorremos el array de tareas
    JSON.parse(localStorage.setItem('toDos', toDos))
    JSON.stringify(localStorage.getItem('toDos'))

    for (const toDo of arrayToDos) {

        // creamos en memoria un article 
        const article = createToDo(toDo);
        // y lo metemos en el DOM
        toDoList.append(article);
    }

    updateItemsLeft(toDos, itemsLeftOutput);

}

function validateEmptyInput(input) {
    const inputValue = input.value;

    if (inputValue.trim() === '') {
        input.classList.add('ring-4', 'ring-red-400')
        return;
    } else {
        input.classList.remove('ring-4', 'ring-red-400');
        return inputValue;
    }
}

function addNewToDo() {

    const newTaskValue = validateEmptyInput(inputTask);

    if (newTaskValue === undefined) {
        return;
    }

    const newToDo = {
        id: nanoid(),
        task: newTaskValue,
        isCompleted: false
    };

    // añadimos a la base de datos //!mutando el array
    // toDos.push(newToDo);

    // vamos a añadirlo pero //*sin mutar el array
    toDos = [...toDos, newToDo];

    // imprimimos
    printToDos();

    // vacía el texto del input para volver a escribir
    inputTask.value = '';
}

function deleteToDo(idDelete) {

    // borrar un elemento //! mutando el array
    // for (let i = 0; i < toDos.length; i++) {
    //     const toDo = toDos[i];
    //     if (idDelete === toDo.id) {
    //         toDos.splice(i, 1);
    //     }
    // }

    // borrar un elemento //* sin mutar el array

    toDos = toDos.filter(toDo => toDo.id !== idDelete);


    printToDos();
}

function completeUncompleteToDo(idComplete) {
    // lo cambiamos //! mutando el array
    // recorremos el array
    // for (const toDo of toDos) {
    //     // preguntamos cual es el que coincide con el ID
    //     if (idComplete === toDo.id) {

    //         // hacemos toggle de la propiedad isCompleted
    //         toDo.isCompleted = !toDo.isCompleted;
    //     }
    // }

    // lo cambiamos //* sin mutar el array

    // toDos = toDos.map(toDo => {
    //     if (toDo.id === idComplete) {
    //         return { ...toDo, isCompleted: !toDo.isCompleted }
    //     } else {
    //         return { ...toDo };
    //     }
    // });

    toDos = toDos.map(toDo => toDo.id === idComplete ? { ...toDo, isCompleted: !toDo.isCompleted } : { ...toDo });

    printToDos();
}


export {
    toDos,
    addNewToDo,
    completeUncompleteToDo,
    createToDo,
    deleteToDo,
    printToDos,
    validateEmptyInput
}