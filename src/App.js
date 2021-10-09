import { useState } from "react";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/newExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "i1",
    date: new Date(2021, 3, 28),
    title: "Car Insurance",
    amount: 299.95,
  },
  {
    id: "i2",
    date: new Date(2021, 3, 31),
    title: "Car Accessories",
    amount: 195.95,
  },
  {
    id: "i3",
    date: new Date(2021, 4, 19),
    title: "Home Improvements",
    amount: 199.9,
  },
  {
    id: "i4",
    date: new Date(2021, 5, 12),
    title: "Teddy Bears",
    amount: 29.95,
  },
];

const App = () => {
  const [itemList, setItemList] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    console.log("in App.js");
    setItemList((prevState) => {
      return [expense, ...prevState];
    });
    // setItemList(updatedItems); // DO NOT USE THIS HERE
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses itemData={itemList} />
    </div>
  );
};

export default App;
