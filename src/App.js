import Expenses from "./compenents/Expenses/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Rich Dad Book",
      amount: 245.56,
      date: new Date(2021, 2, 15),
    },
    {
      id: "e2",
      title: "Toilet Paper",
      amount: 145.56,
      date: new Date(2020, 2, 15),
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
      amount: 245.56,
      date: new Date(2020, 2, 10),
    },
  ];
  return (
    <div>
      <h1>Lets Start</h1>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
