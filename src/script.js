
let balance = 0;

const descInput = document.getElementById("desc")
const amountInput = document.getElementById("amount")
const incomeBtn = document.getElementById("incomeBtn")
const expenseBtn = document.getElementById("expenseBtn")
const incomeList = document.getElementById("incomeList")
const expenseList = document.getElementById("expenseList")
const balanceSpan = document.getElementById("balance")

function addTransaction(type) {
    const desc = descInput.value;
    const amount = Number(amountInput.value);

    if (desc.trim() === "" || amountInput.value.trim() === "") {
        return;
    }

    if (isNaN(amount)) {
        return;
    }

const li = document.createElement("li")

if (type === "income") {
    li.textContent = `${desc} - ${amount} kr (Inkomst)`;
    incomeList.appendChild(li);
    balance += amount;
} else {
    li.textContent = `${desc} - ${amount} kr (Utgift)`;
    expenseList.appendChild(li);
    balance -= amount;
}

balanceSpan.textContent = balance;

descInput.value = "";
amountInput.value = "";
}

incomeBtn.addEventListener("click", () => {
    addTransaction("income");
});

expenseBtn.addEventListener("click", () => {
    addTransaction("expense");
});

