import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      id: "e" + Math.floor(Math.random() * 100).toString(),
      ...enteredExpenseData,
    };
    props.onAddExpense(expenseData);
    setFlag(false);
  };

  const [flag, setFlag] = useState(false);

  const setFlagHandler = () => {
    setFlag(true);
  };
  const cancelFlagHandler = () => {
    setFlag(false);
  };
  return (
    <div className="new-expense">
      {!flag && <button onClick={setFlagHandler}>Add new Expense</button>}
      {flag && (
        <ExpenseForm
          onCancel={cancelFlagHandler}
          onSaveExpenseData={onSaveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
