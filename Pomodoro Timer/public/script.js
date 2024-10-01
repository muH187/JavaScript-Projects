const displayMin = document.getElementById('minutes')
const displaySec = document.getElementById('seconds')
const controls  = document.querySelector('.controls')
const startBtn = document.getElementById('startBtn')
const againBtn = document.getElementById('againBtn')

let workMin = 25
let workSec = 0

window.onload = function (){
    displayMin.textContent = workMin.toString().padStart(2, '0')
    displaySec.textContent = workSec.toString().padStart(2, '0')
    againBtn.remove()
}

const start = () => {
    const pauseBtn = document.createElement('i')
        pauseBtn.className = 'fa-solid fa-pause cursor-pointer'
        startBtn.remove()

        controls.appendChild(pauseBtn)


    let intervalId = setInterval(() => {
        if(workSec === 0) {
            if(workMin === 0) {
                clearInterval(intervalId)
                alert("The session has been done!")
                return
            }
            workMin--
            workSec = 59
        } else {
            workSec--
        }

        displayMin.textContent = workMin.toString().padStart(2, '0')
        displaySec.textContent = workSec.toString().padStart(2, '0')

        

    }, 1000);
}
