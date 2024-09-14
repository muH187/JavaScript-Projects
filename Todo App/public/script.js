const input = document.getElementById("input")
const taskLists = document.getElementById("taskLists")

const addTask = () => {
    if(input.value === "") {
        alert("You must write something to add.")
    } else{
        // Intitializing and Creating elements/const:
        const li = document.createElement('li')
        li.classList.add('py-2', 'flex', 'justify-between', 'cursor-pointer')

        const span = document.createElement('span')
        span.textContent = input.value

        const control = document.createElement('div')
        
        const trashIcon = document.createElement('i')
        trashIcon.classList.add('fa-solid', 'fa-trash', 'cursor-pointer')

        const editIcon = document.createElement('i')
        editIcon.classList.add("fa-solid", "fa-pen", 'cursor-pointer', 'mr-6')


        // Event Listeners:
        li.addEventListener('click', () => {
            span.classList.toggle('line-through')
        })

        trashIcon.addEventListener('click', function (e) {
            e.stopPropagation()
            li.remove()
        })

        editIcon.addEventListener('click', function () {
            input.value += span.textContent
            li.remove()
        })

       // Appending elements:
        li.appendChild(span)
        control.appendChild(editIcon)
        control.appendChild(trashIcon)
        li.appendChild(control)

        taskLists.prepend(li)
        
        input.value = ""
    }
    
}
