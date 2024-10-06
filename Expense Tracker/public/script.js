// Total Balance Section
const totalBalance = document.getElementById('totalBalance')
const totalIncome = document.getElementById('totalIncome')
const totalExpense = document.getElementById('totalExpense')

// Transactions Section
const transactions = document.getElementById('transactions')
// Income
const displayIncomeName = document.getElementById('displayIncomeName')
const incomeDate = document.getElementById('incomeDate')
const income = document.getElementById('income')
// Expense
const displayExpenseName = document.getElementById('displayExpenseName')
const expenseDate = document.getElementById('expenseDate')
const expense = document.getElementById('expense')

// Buttons for expense and income:
const expenseBtn = document.getElementById('expenseBtn')
const incomeBtn = document.getElementById('incomeBtn')

// Name and Amount Inputs:
const nameInput = document.getElementById('nameInput')
const amountInput = document.getElementById('amountInput')

// Submit Button:
const submitBtn = document.getElementById('submitBtn')


// Tracking Variables:
let isExpense = false
let isIncome = true

submitBtn.addEventListener('click', () => {
    totalBalance.textContent = `$${100.02}`
    totalIncome.textContent = `+$${50.93}`
    totalExpense.textContent = `-$${34.50}`

    const details = document.createElement('div')    
    details.className = 'px-2 py-1 cursor-pointer hover:bg-slate-300 rounded-md relative'

    const div = document.createElement('div')
    div.className = ('flex items-center justify-between')

    const div2 = document.createElement('div')
    
    const h1 = document.createElement('h1')
    h1.className = ('font-[600]')

    const p = document.createElement('p')

    if(isIncome) {
        const displayIncome = document.createElement('h1')
        displayIncome.className = ('text-xl text-green-700 font-[500]')
    } else {
        const displayExpense = document.createElement('h1')
        displayExpense.className = ('text-xl text-red-700 font-[500]')
    }
    
    details.appendChild(div)
    div.appendChild(div2)

    div2.appendChild(h1)
    div2.appendChild(p)

    


})

expenseBtn.addEventListener('click', () => {
    isExpense = true
    expenseBtn.className = 'bg-white px-8 font-[500] rounded-md'
    incomeBtn.classList.remove('bg-white')

    nameInput
})

incomeBtn.addEventListener('click', () => {
    isIncome = true
    incomeBtn.className = ('bg-white px-8 font-[500] rounded-md')
    expenseBtn.classList.remove('bg-white')
})
    