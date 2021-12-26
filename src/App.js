import { useState } from "react";
import Expenses from "./compenents/Expenses/Expenses";
import NewExpense from "./compenents/NewExpenses/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Rich Dad Book",
    amount: 245.56,
    date: new Date(2021, 6, 15),
  },
  {
    id: "e2",
    title: "Toilet Paper",
    amount: 145.56,
    date: new Date(2020, 2, 1),
  },
  {
    id: "e3",
    title: "Bag Price",
    amount: 245.56,
    date: new Date(2019, 2, 12),
  },
  {
    id: "e4",
    title: "Car Insurannce",
    amount: 45.56,
    date: new Date(2020, 3, 10),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
