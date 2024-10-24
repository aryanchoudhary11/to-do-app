let todoList = [];

function addTodo() {
    let inputElement = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#todo-date');
    let todotItem = inputElement.value;
    let datetItem = dateElement.value;
    if(todotItem === '' || datetItem === ''){
        alert('Please, Give valid input!');
    } else {

        todoList.push({item: todotItem, date: datetItem});
        inputElement.value = '';
        dateElement.value = '';
    }


    displayItems();
}

function displayItems(){
    let containerElement = document.querySelector('.todo-container');
    let newHtml = '';
    for(let i = 0; i < todoList.length; i++){

        let {item, date} = todoList[i];
        newHtml+= `

            <span>${item}</span>
            <span>${date}</span>
            <button class="delete-btn" onclick = "todoList.splice(${i},1);
            displayItems();
            ">Delete</button>
        `
    }
    containerElement.innerHTML = newHtml;
}