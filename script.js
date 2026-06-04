/* Add Task */

let addTaskBtn = document.querySelector(".addTaskBtn")
let addTaskInput = document.querySelector(".addTaskInput");

addTaskBtn.addEventListener("click", function () {
    let inputValue = addTaskInput.value

    let taskHTML = `
            <li class="taskItem">
                ${inputValue}
                <button class="deleteBtn">Delete</button>
              </li>
    `
    if (inputValue === "") {
        alert('Enter a value')
    } else {
        document.querySelector('.taskList').innerHTML += taskHTML
    }
})

/* Delete task */

document.querySelector(".taskList").addEventListener("click", function(e){
    if (e.target.classList.contains("deleteBtn")) {
        e.target.parentElement.remove();
    }
})

/* Erase task */