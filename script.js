document.getElementById('expense-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const amount = document.getElementById('amount').value;
    const category = document.getElementById('category').value;
    addExpense(amount, category);
    document.getElementById('expense-form').reset();
});

function addExpense(amount, category) {
    const expensesList = document.getElementById('expenses-list');
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${category}: $${amount}`));
    expensesList.appendChild(li);
}
