const boxContainer = document.querySelector(".box-container")

const emojis = ["😀", "😀", "🤖", "🤖", "🧠", "🧠", "👁", "👁", "💼", "💼", "🥾", "🥾", "🍓", "🍓", "🎯", "🎯"]
const shuffleEmojis = emojis.sort(() => 0.5 - Math.random())

let firstClick = null
let secondClick = null
let lock = false
let missed = 0
let matchedPairs = 0

shuffleEmojis.forEach((emoji) => {

    const box = document.createElement('div')
    box.className = "box"
    box.setAttribute('data-emojis', emoji)
    box.textContent = ''

    box.addEventListener('click', () => {
        if (box.textContent !== "" || lock) return

        box.textContent = box.getAttribute('data-emojis')

        if (!firstClick) {
            firstClick = box
        } else if (!secondClick) {
            secondClick = box
            if (firstClick.getAttribute('data-emojis') === secondClick.getAttribute('data-emojis')) {
                
                matchedPairs++
                firstClick = null
                secondClick = null

                if(matchedPairs === emojis.length / 2) {
                    showResult()
                }

            } else {
                missed++
                lock = true
                setTimeout(() => {
                    firstClick.textContent = ""
                    secondClick.textContent = ""
                    firstClick = null
                    secondClick = null
                    lock = false
                }, 1000);
            }
        }

        

    })

  
    boxContainer.appendChild(box)
})


const showResult = () => {
    

    const h1 = document.createElement('h1')
    h1.textContent = `You missed: ${missed} times!`
    h1.className = "text-center text-2xl font-semibold text-slate-800"
    boxContainer.innerHTML = ""

    boxContainer.appendChild(h1)
}