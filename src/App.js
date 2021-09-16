import { useState, useEffect } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  { id: "1sh", title: "Coffee", amount: "25", date: new Date(2021, 7, 5) },

  { id: "2jh", title: "Muffins", amount: "10", date: new Date(2020, 5, 29) },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseDataHandler = (expenseData) => {
    setExpenses((prevState) => {
      return [expenseData, ...prevState];
    });
  };
  console.log(
    expenses.map((expense) => console.log(expense.date.getFullYear(), "year"))
  );
  return (
    <div>
      <NewExpense onAddExpenseData={addExpenseDataHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
