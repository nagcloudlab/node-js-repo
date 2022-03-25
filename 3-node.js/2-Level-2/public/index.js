console.log("-index.js-")

const todosBtn = document.getElementById('todos-btn')
const todosEle = document.getElementById('todos');

todosBtn.addEventListener('click', async e => {
    let response = await fetch("todos?limit=3")
    let todos = await response.json()
    let todoLiEles = todos.map(todo => {
        return `
            <li class="list-group-item">
               <div class="d-flex justify-content-around">
                    <div>${todo.id}</div>
                    <div>${todo.title}</div>
                    <div>${todo.completed}</div>
                </div>
            </li>
        `
    })
    todosEle.innerHTML = todoLiEles.join("")
})