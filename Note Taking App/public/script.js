const input = document.getElementById("input")
const createBtn = document.getElementById("createBtn")
const closeBtn = document.getElementById("closeBtn")
const addNote = document.querySelector(".addNote")
const newNote = document.querySelector(".newNote")
const showText = document.getElementById("showText")
const notesContainer = document.querySelector(".notes")

let isEditing = false
let currentNote = null

addNote.addEventListener('click', () => {
    newNote.style.display = "flex"
})

createBtn.addEventListener('click', () => {

    if(input.value === "") return alert("You must write something!")
    
    if(isEditing) {
        currentNote.remove()
        isEditing = false
        currentNote = null
    } else {
        showingAddNew()
    }
})

closeBtn.addEventListener('click', () => {
    input.value = ""
    newNote.style.display = 'none'
})

const showingAddNew = () => {
    const note = document.createElement('div')
    note.className = "note"

    const p = document.createElement('p')
    p.textContent += input.value

    const controls = document.createElement('div')

    const editBtn = document.createElement('i')
    editBtn.className = "fa-solid fa-pencil mx-3 cursor-pointer"

    const trashBtn = document.createElement('i')
    trashBtn.className = "fa-solid fa-trash mx-3 cursor-pointer"

    controls.appendChild(editBtn)
    controls.appendChild(trashBtn)

    note.appendChild(p)
    note.appendChild(controls)

    notesContainer.appendChild(note)

    input.value = ""
    newNote.style.display = 'none'

    trashBtn.addEventListener('click', () => {
        note.remove()
    })

    editBtn.addEventListener('click', () => {
        newNote.style.display = "flex"
        createBtn.textContent = "Update"
        input.value += p.textContent
        isEditing = true
        currentNote = note
    })
}