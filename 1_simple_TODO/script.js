const todo = document.getElementById('todo');
const listContainer = document.getElementById('list-container');
function addTask() {
    if (todo.value === '') {
        alert('Please enter a task');
    }
    else {
        let li = document.createElement('li');
        li.innerHTML = todo.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    todo.value = '';
    saveData();
}

listContainer.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();
    }
    if (e.target.tagName === 'SPAN') {
        e.target.parentElement.style.display = 'none';
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem('data', listContainer.innerHTML);
}
function showTask() {
    listContainer.innerHTML = localStorage.getItem('data');
}
showTask();