

function updateItemsLeft (toDos, output) {
    const activeToDos = toDos.filter((toDo) => !toDo.isCompleted);

    output.innerText = activeToDos.length;
}


export default updateItemsLeft;