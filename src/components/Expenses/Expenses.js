import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpensesList";

import "./Expenses.css";

const Expenses = (props) => {
  const [optionValue, setOptionValue] = useState("2020");

  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === optionValue
  );

  const saveOptionValueHandler = (value) => {
    setOptionValue(value);
  };

  return (
    <div>
      <ExpenseFilter
        savedYear={optionValue}
        onSaveOptionValue={saveOptionValueHandler}
      />
      <Card className="expenses">
        <div className="expenses-items">
          <h2>Filter by Year</h2>
          <ExpenseList filteredExpenses={filteredExpenses} />
        </div>
      </Card>
    </div>
  );
};

export default Expenses;
