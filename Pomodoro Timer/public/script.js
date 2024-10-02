    const displayMin = document.getElementById('minutes')
    const displaySec = document.getElementById('seconds')
    const controls = document.querySelector('.controls')
    const startBtn = document.getElementById('startBtn')
    const againBtn = document.getElementById('againBtn')

    let workMin = 25
    let workSec = 0
    let breakTime = 5

    let intervalId = null
    let isRunning = false
    let isBreak = false

    window.onload = function () {
        displayMin.textContent = workMin.toString().padStart(2, '0')
        displaySec.textContent = workSec.toString().padStart(2, '0')
        againBtn.remove()
    }

    startBtn.addEventListener('click', () => {
        if (!isRunning && !isBreak) {
            isRunning = true
            startTimer()
        }

    })

    const startTimer = () => {
        const pauseBtn = document.createElement('i')
        pauseBtn.className = 'fa-solid fa-pause cursor-pointer'
        startBtn.remove()

        controls.appendChild(pauseBtn)


        let intervalId = setInterval(() => {
            if (workSec === 0) {
                if (workMin === 0) {
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

        pauseBtn.addEventListener('click', () => {
            clearInterval(intervalId)
            isRunning = false
            controls.removeChild(pauseBtn)
            controls.appendChild(startBtn)
        })
    }

    const breakTimer = () => {
        isBreak = true
        clearInterval(intervalId)

        displayMin.textContent = breakTime.toString().padStart(2, '0')
        displaySec.textContent = "00"
        isRunning = false

        startBtn.addEventListener('click', () => {
            if(!isRunning && breakTime) {
                isRunning = true
                startBreakTimer()
            }
        })
    }

    const startBreakTimer = () => {
        const pauseBtn = document.createElement('i')
        pauseBtn.className = 'fa-solid fa-pause cursor-pointer'
        startBtn.remove()

        controls.appendChild(pauseBtn)


        let intervalId = setInterval(() => {
            if (workSec === 0) {
                if (breakTime === 0) {
                    clearInterval(intervalId)
                    alert("The session has been done!")
                    return
                }
                breakTime--
                workSec = 59
            } else {
                workSec--
            }

            displayMin.textContent = breakTime.toString().padStart(2, '0')
            displaySec.textContent = workSec.toString().padStart(2, '0')
        }, 1000);

        pauseBtn.addEventListener('click', () => {
            clearInterval(intervalId)
            isRunning = false
            controls.removeChild(pauseBtn)
            controls.appendChild(startBtn)
        })
    }