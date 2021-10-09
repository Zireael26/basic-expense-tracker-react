import { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = (event) => {
    setIsEditing(true);
  };

  const cancelSubmitHandler = (event) => {
    setIsEditing(false);
  };

  const addNewExpenseButton = (
    <div className="new-expense__add-action">
      <button onClick={startEditingHandler}>Add New Expense</button>
    </div>
  );

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {!isEditing && addNewExpenseButton}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancelSubmit={cancelSubmitHandler}
          setIsFormVisible={setIsEditing}
        />
      )}
    </div>
  );
};

export default NewExpense;
