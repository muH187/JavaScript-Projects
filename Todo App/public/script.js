const input = document.getElementById("input")
const taskLists = document.getElementById("taskLists")

const addTask = () => {
    if(input.value === "") {
        alert("You must write something to add.")
    } else{
        const li = document.createElement('li')
        li.textContent = input.value
        li.classList.add('py-2', 'flex', 'justify-between', 'cursor-pointer')

        const trashIcon = document.createElement('i')
        trashIcon.classList.add('fa-solid', 'fa-trash', 'cursor-pointer')

        li.appendChild(trashIcon)
        taskLists.appendChild(li)
        
        input.value = ""
    }
    
}