const input = document.getElementById("input")
const showAmount = document.getElementById("showAmount")
const fromCurrency = document.getElementById("fromCurrency")
const toCurrency = document.getElementById("toCurrency")

const api = 'api.frankfurter.app';

fetch(`https://${api}/currencies`)
  .then((data) => data.json())
  .then((data) => {
    const entries = Object.entries(data)
    entries.forEach(([currencyCode, currencyName]) => {
        const option = `<option value="${currencyCode}">${currencyCode} - ${currencyName}</option>`
        fromCurrency.innerHTML += option
        toCurrency.innerHTML += option
    })
  });

function convert() {

    const amount = input.value
    const fromCurr = fromCurrency.value
    const toCurr = toCurrency.value

    if(input.value === "") {
        alert("Type amount which you want to convert!")
    } else if(input.value == 0) {
        alert("Zero cannot be converted!")
    } else if(isNaN(input.value)) {
        alert("Enter valid amount!")
    } else if(Math.sign(input.value) === -1) {
        alert("Negative amount cannot be converted!")
    } else {
        fetch(`https://${api}/latest?amount=${amount}&from=${fromCurr}&to=${toCurr}`)
            .then((data) => data.json())
            .then((data) => {
                const rate = data.rates[toCurr]
                showAmount.textContent = `${fromCurr} ${amount} = ${(amount * rate).toFixed(1)} ${toCurr}`
            })
    }
}

// IGNORED CODE / FOR PRACTICE: 

// const showAmount = document.getElementById("showAmount")
// const input = document.getElementById("input")
// const fromCurrency = document.getElementById("fromCurrency")
// const toCurrency = document.getElementById("toCurrency")

// const api = 'api.frankfurter.app';

// fetch(`https://${api}/currencies`)
//     .then((data) => data.json())
//     .then((data) => {
//         const entries = Object.entries(data)
//         entries.forEach(([currencyCode, currencyName]) => {
//             const option = `<option value="${currencyCode}">${currencyCode} - ${currencyName}</option>`;
//             fromCurrency.innerHTML += option
//             toCurrency.innerHTML += option
//         });
//     });

// const convert = () => {

//     const amount = input.value
//     const fromCurr = fromCurrency.value
//     const toCurr = toCurrency.value

//     if (input.value === "") {
//         alert("Input is empty!")
//     } else if (isNaN(input.value)) {
//         alert("Please type valid number!")
//     } else if (Math.sign(input.value) === -1) {
//         alert("Please type positive number only!")
//     } else if (input.value == 0) {
//         alert("Zero is not allowed to convert!")
//     } else if (fromCurr || toCurr === "") {
//         alert("You need to select both 'From Currency' and 'To Currency' options!")
//     } else {
//         fetch(`https://${api}/latest?amount=${amount}&from=${fromCurr}&to=${toCurr}`)
//             .then((data) => data.json())
//             .then((data) => {
                
//                     const rate = data.rates[toCurr]
//                     showAmount.textContent = `${amount} ${fromCurr} = ${(amount * rate).toFixed(1)} ${toCurr}`
        
                
//             })
//     }
// }

