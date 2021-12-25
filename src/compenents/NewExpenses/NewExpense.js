import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };
    props.onAddExpense(expenseData);
    setIsEditing(!isEditing);
    // console.log(expenseData);
  };
  const addExpenseHandler = () => {
    setIsEditing(true);
  };

  const cancelHandler = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="new-expense">
      {/* {!isEditing && <button onClick={addExpenseHandler}>Add Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />} */}
      {!isEditing ? (
        <button onClick={addExpenseHandler}>Add Expense</button>
      ) : (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
