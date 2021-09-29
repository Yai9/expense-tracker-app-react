import ExpenseItem from './ExpenseItem'

const ExpensesList = props => {
    if (props.filteredExpenses.length === 0) {
        return (
            <h2 className="expense-list__fallback">
                No results for selected year.
            </h2>
        )
    }

    return (
        <ul className="expenses-list">
            {props.filteredExpenses.map(expense => (
                <ExpenseItem
                    id={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                    key={expense.id}
                />
            ))}
        </ul>
    )
}

export default ExpensesList
