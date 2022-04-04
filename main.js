let addToDOButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');
let tasks = document.getElementById('tasks');
let input = document.getElementById('input');

document.querySelector('#addToDo').onclick = function(){
    if(document.querySelector('#addToDo').value.length == 0){
        alert("Please Enter a Task")
    }
    else{
        document.querySelector('#addToDo').innerHTML = inputField.value
    }
}


addToDOButton.addEventListener('click', function(){
    var paragraph = document.createElement('div');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    tasks.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        tasks.removeChild(paragraph);
    })
})






/*
storeToDoInLocalStorage(inputField.value);

function storeToDoInLocalStorage(inputField){
    let input;
    if(localStorage.getItem('input') === null){
        inputField = [];
    } else {
        input = JSON.parse(localStorage.getItem('input'));
    }

    input.push(inputField);

    localStorage.setItem('input', JSON.stringify(input));
}
*/
