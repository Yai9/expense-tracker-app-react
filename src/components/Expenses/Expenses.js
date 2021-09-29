import { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import ExpensesChart from './ExpensesChart'
import ExpenseFilter from './ExpenseFilter'
import ExpenseList from './ExpensesList'

import './Expenses.css'

const Expenses = props => {
    const [optionValue, setOptionValue] = useState('2020')

    const filteredExpenses = props.expenses.filter(
        expense => expense.date.getFullYear().toString() === optionValue
    )

    const saveOptionValueHandler = value => {
        setOptionValue(value)
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesChart expenses={filteredExpenses} />
                <div className="expenses-items">
                    <h2>Filter by Year</h2>
                    <ExpenseFilter
                        savedYear={optionValue}
                        onSaveOptionValue={saveOptionValueHandler}
                    />
                    <ExpenseList filteredExpenses={filteredExpenses} />
                </div>
            </Card>
        </div>
    )
}

export default Expenses
