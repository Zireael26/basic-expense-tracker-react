import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState(new Date(2019, 1, 1));

  const submitFormHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: parseFloat(enteredAmount),
      date: enteredDate,
    };

    props.onSaveExpenseData(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate(new Date(2019, 1, 1));

    props.setIsFormVisible(false);
  };
  //     const [enteredData, setEnteredData] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: new Date(2019, 1, 1),
  //   });

  //   const titleChangeHandler = (event) => {
  //     setEnteredData((prevState) => {
  //       return {
  //         ...prevState,
  //         enteredTitle: event.target.value,
  //       };
  //     });

  //     // setEnteredData({
  //     //   ...enteredData,
  //     //   enteredTitle: event.target.value,
  //     // });
  //   };

  //   const amountChangeHandler = (event) => {
  //     setEnteredData((prevState) => {
  //       return {
  //         ...prevState,
  //         enteredAmount: event.target.value,
  //       };
  //     });
  //   };

  //   const dateChangeHandler = (event) => {
  //     setEnteredData((prevState) => {
  //       return {
  //         ...prevState,
  //         enteredDate: event.target.valueAsDate,
  //       };
  //     });
  //   };

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.valueAsDate);
  };

  return (
    <form onSubmit={submitFormHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate.toDateString()}
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={props.onCancelSubmit}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
