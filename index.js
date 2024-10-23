let todoList = [];
displayItems();
function addTodo() {
    let inputElement = document.querySelector('#todo-input');
    let todotItem = inputElement.value;
    todoList.push(todotItem);
    inputElement.value = '';

    displayItems();
}

function displayItems(){
    let displayElement = document.querySelector('#todo-items');
    displayElement.innerText = '';
    for(let i = 0; i < todoList.length; i++){
        displayElement.innerText = displayElement.innerText + '\n' + todoList[i];
    }

}