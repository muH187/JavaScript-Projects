// // Total Balance Section
// const totalBalance = document.getElementById('totalBalance')
// const totalIncome = document.getElementById('totalIncome')
// const totalExpense = document.getElementById('totalExpense')

// // Transactions Section
// const transactions = document.getElementById('transactions')
// // Income
// const displayIncomeName = document.getElementById('displayIncomeName')
// const incomeDate = document.getElementById('incomeDate')
// const income = document.getElementById('income')
// // Expense
// const displayExpenseName = document.getElementById('displayExpenseName')
// const expenseDate = document.getElementById('expenseDate')
// const expense = document.getElementById('expense')

// // Buttons for expense and income:
// const expenseBtn = document.getElementById('expenseBtn')
// const incomeBtn = document.getElementById('incomeBtn')

// // Name and Amount Inputs:
// const nameInput = document.getElementById('nameInput')
// const amountInput = document.getElementById('amountInput')

// // Submit Button:
// const submitBtn = document.getElementById('submitBtn')

// window.onload = function () {
//     totalBalance.textContent = "$0.00"
//     totalIncome.textContent = "$0.00"
//     totalExpense.textContent = "$0.00"
// }

// submitBtn.addEventListener('click', (displayIncomeAmount, displayExpenseAmount) => {

//     if (nameInput.value == "") {
//         alert('You need to type a name!')
//     } else if (amountInput.value == "") {
//         alert('You need to enter an amount!')
//     } else {

//         totalBalance.textContent === ""
//         totalExpense.textContent === ""
//         totalIncome.textContent === ""

//         totalBalance.textContent += `$ ${amountInput.value}`
//         totalIncome.textContent += `+$${(displayIncomeAmount) + (amountInput.value)}`
//         totalExpense.textContent += `-$${(displayExpenseAmount) - (amountInput.value)}`

//         expenseBtn.addEventListener('click', () => {
//             expenseBtn.className = 'bg-white px-8 font-[500] rounded-md'
//             incomeBtn.classList.remove('bg-white')

//             const details = document.createElement('div')
//             details.className = 'px-2 py-1 cursor-pointer hover:bg-slate-300 rounded-md relative'

//             const div = document.createElement('div')
//             div.className = ('flex items-center justify-between')

//             const div2 = document.createElement('div')

//             const h1 = document.createElement('h1')
//             h1.className = ('font-[600]')
//             h1.textContent = nameInput.value

//             const p = document.createElement('p')

//             // For Image:
//             const div3 = document.createElement('div')
//             div3.className = ('action h-10 w-10 bg-red-600 text-white p-2 rounded-md absolute top-2 right-1')

//             const img = document.createElement('img')
//             img.src = 'cross.svg'

//             const displayExpenseAmount = document.createElement('h1')
//             displayExpenseAmount.className = ('text-xl text-red-700 font-[500]')
//             displayExpenseAmount.textContent = amountInput.value

//             div.appendChild(div2)
//             div.appendChild(displayExpenseAmount)

//             div2.appendChild(h1)
//             div2.appendChild(p)

//             div3.appendChild(img)

//             details.appendChild(div)
//             details.appendChild(div3) })

//             incomeBtn.addEventListener('click', () => {
//                 incomeBtn.className = ('bg-white px-8 font-[500] rounded-md')
//                 expenseBtn.classList.remove('bg-white')


//                 const details = document.createElement('div')
//                 details.className = 'px-2 py-1 cursor-pointer hover:bg-slate-300 rounded-md relative'

//                 const div = document.createElement('div')
//                 div.className = ('flex items-center justify-between')

//                 const div2 = document.createElement('div')

//                 const h1 = document.createElement('h1')
//                 h1.className = ('font-[600]')
//                 h1.textContent = nameInput.value

//                 const p = document.createElement('p')

//                 // For Image:
//                 const div3 = document.createElement('div')
//                 div3.className = ('action h-10 w-10 bg-red-600 text-white p-2 rounded-md absolute top-2 right-1')

//                 const img = document.createElement('img')
//                 img.src = 'cross.svg'

//                 const displayIncomeAmount = document.createElement('h1')
//                 displayIncomeAmount.className = ('text-xl text-green-700 font-[500]')
//                 displayIncomeAmount.textContent = amountInput.value

//                 div.appendChild(div2)
//                 div.appendChild(displayIncomeAmount)

//                 div2.appendChild(h1)
//                 div2.appendChild(p)

//                 div3.appendChild(img)

//                 details.appendChild(div)
//                 details.appendChild(div3)
//             })
//     }

// })


// Total Balance Section
const totalBalance = document.getElementById('totalBalance');
const totalIncome = document.getElementById('totalIncome');
const totalExpense = document.getElementById('totalExpense');

// Transactions Section
const transactions = document.getElementById('transactions');
// Income
const displayIncomeName = document.getElementById('displayIncomeName');
const incomeDate = document.getElementById('incomeDate');
const income = document.getElementById('income');
// Expense
const displayExpenseName = document.getElementById('displayExpenseName');
const expenseDate = document.getElementById('expenseDate');
const expense = document.getElementById('expense');

// Buttons for expense and income:
const expenseBtn = document.getElementById('expenseBtn');
const incomeBtn = document.getElementById('incomeBtn');

// Name and Amount Inputs:
const nameInput = document.getElementById('nameInput');
const amountInput = document.getElementById('amountInput');

// Submit Button:
const submitBtn = document.getElementById('submitBtn');

let currentType = 'income';  // Track whether it's income or expense

window.onload = function () {
    totalBalance.textContent = "$0.00";
    totalIncome.textContent = "$0.00";
    totalExpense.textContent = "$0.00";
};

// Switch between income and expense
expenseBtn.addEventListener('click', () => {
    currentType = 'expense';
    expenseBtn.classList.add('bg-white');
    incomeBtn.classList.remove('bg-white');
});

incomeBtn.addEventListener('click', () => {
    currentType = 'income';
    incomeBtn.classList.add('bg-white');
    expenseBtn.classList.remove('bg-white');
});

// Handle the submit button click
submitBtn.addEventListener('click', () => {
    const name = nameInput.value;
    const amount = parseFloat(amountInput.value);

    // Validation
    if (name === "") {
        alert('You need to type a name!');
        return;
    }
    if (isNaN(amount) || amount <= 0) {
        alert('You need to enter a valid amount!');
        return;
    }

    // Update total income or expense
    if (currentType === 'income') {
        const newIncome = parseFloat(totalIncome.textContent.slice(1)) + amount;
        totalIncome.textContent = `$${newIncome.toFixed(2)}`;
    } else {
        const newExpense = parseFloat(totalExpense.textContent.slice(1)) + amount;
        totalExpense.textContent = `$${newExpense.toFixed(2)}`;
    }

    // Update total balance
    const incomeValue = parseFloat(totalIncome.textContent.slice(1));
    const expenseValue = parseFloat(totalExpense.textContent.slice(1));
    const newBalance = incomeValue - expenseValue;
    totalBalance.textContent = `$${newBalance.toFixed(2)}`;

    // Add to transaction list
    const details = document.createElement('div');
    details.className = 'details px-2 py-1 cursor-pointer hover:bg-slate-300 rounded-md relative';

    const div = document.createElement('div');
    div.className = 'flex items-center justify-between';

    const div2 = document.createElement('div');
    const h1 = document.createElement('h1');
    h1.className = 'font-[600]';
    h1.textContent = name;

    const p = document.createElement('p');
    p.textContent = new Date().toLocaleDateString();  // Display today's date

    div2.appendChild(h1);
    div2.appendChild(p);

    const div3 = document.createElement('div');
    div3.className = 'action h-10 w-10 bg-red-600 text-white p-2 rounded-md absolute top-2 right-1';

    const img = document.createElement('img');
    img.src = 'cross.svg';

    div3.appendChild(img);

    const displayAmount = document.createElement('h1');
    displayAmount.className = currentType === 'income' ? 'text-xl text-green-700 font-[500]' : 'text-xl text-red-700 font-[500]';
    displayAmount.textContent = currentType === 'income' ? `+$${amount.toFixed(2)}` : `-$${amount.toFixed(2)}`;

    div.appendChild(div2);
    div.appendChild(displayAmount);

    details.appendChild(div);
    details.appendChild(div3);

    transactions.appendChild(details);

    div3.addEventListener('click', () => {
        transactions.removeChild(details)
    })

    // Clear input fields
    nameInput.value = '';
    amountInput.value = '';
});

