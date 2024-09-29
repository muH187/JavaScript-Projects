const input = document.getElementById("input")
const createBtn = document.getElementById("createBtn")
const closeBtn = document.getElementById("closeBtn")
const addNote = document.querySelector(".addNote")
const newNote = document.querySelector(".newNote")
const showText = document.getElementById("showText")



addNote.addEventListener('click', () => {
    newNote.style.display = "flex"
})

createBtn.addEventListener('click', () => {
    console.log("hello")
    const notes = document.createElement('div')
    notes.className = "notes"
    const note = document.createElement('div')
    note.className = "xl:w-60 xl:h-60 xl:rounded-lg text-xl bg-[#F8E977] w-36 h-36 flex flex-col justify-between rounded-md text-center p-3 shadow-2xl"

    const p = document.createElement('p')
    p.textContent += input.value

    const controls = document.createElement('div')
    const editBtn = document.createElement('i')
    editBtn.className = "fa-solid fa-pencil mx-3 cursor-pointer"
    const trashBtn = document.createElement('i')
    trashBtn.className = "fa-solid fa-trash mx-3 cursor-pointer"

    controls.appendChild(editBtn)
    controls.appendChild(trashBtn)

    notes.appendChild(note)
    note.appendChild(p)
    note.appendChild(controls)

    input.value = ""
    notes.classList.remove('notes')
})

