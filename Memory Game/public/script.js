const boxContainer = document.querySelector(".box-container")

const emojis = ["😀", "😀", "🤖", "🤖", "🧠", "🧠", "👁", "👁", "💼", "💼", "🥾", "🥾", "🍓", "🍓", "🎯", "🎯"] 
const shuffleEmojis = emojis.sort(() => 0.5 - Math.random())

shuffleEmojis.forEach((emojis) => {
    
    const box = document.createElement('div')
    box.className = "w-24 h-24 bg-blue-400 text-4xl flex justify-center items-center cursor-pointer rounded-md"
    box.textContent = emojis

    box.addEventListener('click', () => {
        console.log('click...')
    })

    boxContainer.appendChild(box)
})

