import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.filteredItems.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found!</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.filteredItems.map((item) => (
        <ExpenseItem
          key={item.id}
          date={item.date}
          title={item.title}
          price={item.amount}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
