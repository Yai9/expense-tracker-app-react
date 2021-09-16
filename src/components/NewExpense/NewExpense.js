import { useState } from "react";
import ExpenseForm from "../Expenses/ExpenseForm";
import Button from "../UI/Button/Button";

import "./NewExpense.css";

const NewExpense = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const [expenseVisibility, setVisibility] = useState(false);

  const changeTitleHandler = (event) => {
    setTitle(event.target.value);
  };
  const changeAmountHandler = (event) => {
    setAmount(event.target.value);
  };
  const changeDateHandler = (event) => {
    setDate(event.target.value);
  };

  const onExpensesSubmitHandler = (event) => {
    event.preventDefault();

    const expensesData = {
      title: title,
      amount: amount,
      date: new Date(date),
      id: Math.random(),
    };
    props.onAddExpenseData(expensesData);

    setTitle("");
    setAmount("");
    setDate("");

    setVisibility(false);
  };

  const onCancelExpenseHandler = (event) => {
    event.preventDefault();
    setVisibility(false);
  };

  const showExpensesHandler = (event) => {
    event.preventDefault();
    setVisibility(true);
  };
  return (
    <div className="new-expense">
      {expenseVisibility && (
        <ExpenseForm
          title={title}
          amount={amount}
          date={date}
          onExpensesSubmit={onExpensesSubmitHandler}
          onCancelExpenseData={onCancelExpenseHandler}
          showExpenses={showExpensesHandler}
          titleChange={changeTitleHandler}
          amountChange={changeAmountHandler}
          dateChange={changeDateHandler}
        />
      )}
      {!expenseVisibility && (
        <Button clicked={showExpensesHandler}>Show Expenses</Button>
      )}
    </div>
  );
};

export default NewExpense;
