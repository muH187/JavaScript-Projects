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
let isIncome = false

window.onload = function(e) {
    totalBalance.textContent = "$0.00"
    totalIncome.textContent = "$0.00"
    totalExpense.textContent = "$0.00"
}

submitBtn.addEventListener('click', (displayIncomeAmount, displayExpenseAmount) => {

    if (nameInput === "") {
        alert('You need to type a name!')
    } else if (amountInput === "") {
        alert('You need to enter an amount!')
    } else {

        totalBalance.textContent += `$ ${amountInput.value}`
        totalIncome.textContent += `+$${displayIncomeAmount}`
        totalExpense.textContent += `-$${displayExpenseAmount}`

        if (isExpense) {

            expenseBtn.addEventListener('click', () => {
                isExpense = true
                expenseBtn.className = 'bg-white px-8 font-[500] rounded-md'
                incomeBtn.classList.remove('bg-white')

                const details = document.createElement('div')
                details.className = 'px-2 py-1 cursor-pointer hover:bg-slate-300 rounded-md relative'

                const div = document.createElement('div')
                div.className = ('flex items-center justify-between')

                const div2 = document.createElement('div')

                const h1 = document.createElement('h1')
                h1.className = ('font-[600]')
                h1.textContent = nameInput.value

                const p = document.createElement('p')

                // For Image:
                const div3 = document.createElement('div')
                div3.className = ('action h-10 w-10 bg-red-600 text-white p-2 rounded-md absolute top-2 right-1')

                const img = document.createElement('img')
                img.src = 'cross.svg'

                const displayExpenseAmount = document.createElement('h1')
                displayExpenseAmount.className = ('text-xl text-red-700 font-[500]')
                displayExpenseAmount.textContent = amountInput.value

                div.appendChild(div2)
                div.appendChild(displayExpenseName)

                div2.appendChild(h1)
                div2.appendChild(p)

                div3.appendChild(img)

                details.appendChild(div)
                details.appendChild(div3)
            })

            isIncome = true

        } else {

            incomeBtn.addEventListener('click', () => {
                isIncome = true
                incomeBtn.className = ('bg-white px-8 font-[500] rounded-md')
                expenseBtn.classList.remove('bg-white')


                const details = document.createElement('div')
                details.className = 'px-2 py-1 cursor-pointer hover:bg-slate-300 rounded-md relative'

                const div = document.createElement('div')
                div.className = ('flex items-center justify-between')

                const div2 = document.createElement('div')

                const h1 = document.createElement('h1')
                h1.className = ('font-[600]')
                h1.textContent = nameInput.value

                const p = document.createElement('p')

                // For Image:
                const div3 = document.createElement('div')
                div3.className = ('action h-10 w-10 bg-red-600 text-white p-2 rounded-md absolute top-2 right-1')

                const img = document.createElement('img')
                img.src = 'cross.svg'

                const displayIncomeAmount = document.createElement('h1')
                displayIncomeAmount.className = ('text-xl text-green-700 font-[500]')
                displayIncomeAmount.textContent = amountInput.value

                div.appendChild(div2)
                div.appendChild(displayExpenseName)

                div2.appendChild(h1)
                div2.appendChild(p)

                div3.appendChild(img)

                details.appendChild(div)
                details.appendChild(div3)
            })
        }

    }
})