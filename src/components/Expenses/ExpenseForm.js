import './ExpenseForm.css'

const ExpenseForm = props => {
    return (
        <form>
            <div>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input
                            type="text"
                            onChange={props.titleChange}
                            value={props.title}
                        />
                    </div>
                    <div className="new-expense__control">
                        <label>Amount</label>
                        <input
                            type="number"
                            min="0.01"
                            step="0.01"
                            onChange={props.amountChange}
                            value={props.amount}
                        />
                    </div>
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input
                            type="date"
                            min="2019-01-01"
                            step="2022-12-31"
                            onChange={props.dateChange}
                            value={props.date}
                        />
                    </div>
                </div>
                <button type="reset" onClick={props.onCancelExpenseData}>
                    Cancel
                </button>
                <button type="submit" onClick={props.onExpensesSubmit}>
                    Submit
                </button>
            </div>
        </form>
    )
}

export default ExpenseForm
