import "./Expenses.css";
import Card from "../ui/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState(
    new Date().getFullYear().toString()
  );
  const selectFilterYearHandler = (selectedYear) => {
    console.log(selectedYear);
    setFilterYear(selectedYear);
  };

  const itemData = props.itemData;
  const filteredItems = itemData.filter((item) => {
    return item.date.getFullYear() === parseInt(filterYear);
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filterYear}
        onSelectFilterYear={selectFilterYearHandler}
      />
      <ExpensesChart expenses={filteredItems} />
      <ExpensesList filteredItems={filteredItems} />
    </Card>
  );
};

export default Expenses;
