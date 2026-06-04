let addTaskBtn = document.querySelector(".addTaskBtn")
let addTaskInput = document.querySelector(".addTaskInput");

addTaskBtn.addEventListener("click", function () {
    let inputValue = addTaskInput.value

    let taskHTML = `
            <li class="taskItem">
                ${inputValue}
                <button>Delete</button>
              </li>
    `
    if (inputValue === "") {
        alert('Enter a value')
    } else {
        document.querySelector('.taskList').innerHTML += taskHTML
    }
})
