
let ele = document.getElementById('todo');
let task_form = document.querySelector('.form');
let task_submit = document.getElementById('task_submit');


function todo() {

    document.getElementById('header').style.display = 'none';
    document.body.style.backgroundColor = 'rgb(36, 36, 36)';
    document.getElementById('todo').style.display = 'block';
}

function addtask(e) {
    e.preventDefault();
    let task_txt = task_form.querySelector('.task_txt');
    let inp = task_txt.value;
    if (inp === '') {
        alert('Please enter a task');
        return;
    }

    let div = document.createElement('div');
    let task = div.classList.add('task');
    let input = document.createElement('input');
    input.id = 'input_task';
    input.type = 'text';
    input.value = inp.charAt(0).toUpperCase()+ inp.slice(1); 

    //creating edit button.......

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('edit');
    editButton.addEventListener('click', function () {
    if (editButton.textContent === 'Edit') {
        input.focus();
        editButton.textContent = 'Save';
    } else {
        input.blur();
        editButton.textContent = 'Edit';
        updateLocalStorage();
    }
});


    //creating delete button.......

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete');
    deleteButton.addEventListener('click', function deleteTask() {
        div.remove();
        updateLocalStorage();
    });

    div.appendChild(editButton);
    div.appendChild(deleteButton);
    div.appendChild(input);
    ele.appendChild(div);

    //clearing input value.......
    task_txt.value = '';
    //updating local storage....
    updateLocalStorage();
}

function updateLocalStorage() {
    let tasks = [];
    let taskEle = document.querySelectorAll('.task');
    taskEle.forEach(function (taskEle) {
        let newinput = taskEle.querySelector('input');
        tasks.push(newinput.value);
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
    localStorage.getItem(tasks);
}