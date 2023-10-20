

import { toDos, addNewToDo, printToDos } from './helpers/functions';

import './styles/style.css';


const toDoList = document.querySelector('.toDo-list');
const inputTask = document.querySelector('.input-task');

// let toDos = [
//     {
//         id: nanoid(),
//         task: 'Estudiar JavaScript',
//         isCompleted: false
//     },
//     {
//         id: nanoid(),
//         task: 'Pasear a las perras. 🐶',
//         isCompleted: true
//     },
//     {
//         id: nanoid(),
//         task: 'Comprar el pan',
//         isCompleted: true
//     }
// ];





//* Escuchamos el evento keypress del input, y cuando apretes ENTER que se añada el nuevo TODO
inputTask.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') addNewToDo();
});

//* Opción 2 para eliminar y completar: Escuchamos todos los clicks dentro de toDoList y delegamos lo que hay que hacer dependiendo de si clicamos en el boton de completar o en el de borrar
/*
toDoList.addEventListener('click', (event) => {
    if (event.target.getAttribute('data-complete') !== null) {
        // conseguimos el ID del toDo que lo sacamos del data-id que le hemos puesto a cada article
        const toDoIdToComplete = event.target.parentElement.parentElement.dataset.id;

        completeUncompleteToDo(toDoIdToComplete);

    } else if (event.target.getAttribute('data-delete') !== null) {
        const toDoIdToDelete = event.target.parentElement.dataset.id;

        deleteToDo(toDoIdToDelete);
    }

});

*/



//* ========================================== *//
//* ========================================== *//

//* Filtrar toDos

const filterAll = document.querySelector('.filter-all');
const filterActive = document.querySelector('.filter-active');
const filterCompleted = document.querySelector('.filter-completed');
const clearCompleted = document.querySelector('.clear-completed');


filterAll.onclick = () => printToDos();


filterActive.onclick = () => {
    const filteredToDos = toDos.filter((toDo) => {  return !toDo.isCompleted});
    
    printToDos(filteredToDos);
}

filterCompleted.onclick = () => {
    const filteredToDos = toDos.filter(toDo => toDo.isCompleted);

    printToDos(filteredToDos);
}

clearCompleted.onclick = () => {
    toDos = toDos.filter(toDo => !toDo.isCompleted);

    printToDos();
}


//* ========================================== *//
//* Items left info

const itemsLeftOutput = document.querySelector('.items-left');


printToDos();


export { toDos, toDoList, inputTask, itemsLeftOutput };