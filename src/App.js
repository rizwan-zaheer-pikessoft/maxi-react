import ExpenseItem from "./components/ExpenseItem";

function App() {
    const expenses = [
        {
            id: 1,
            title: "Rent",
            amount: 1000.00,
            date: "2023-08-01"
        },
        {
            id: 2,
            title: "Groceries",
            amount: 150.00,
            date: "2023-08-05"
        },
        {
            id: 3,
            title: "Utilities",
            amount: 250.00,
            date: "2023-08-15"
        }
    ];
  return (
    <div>
      <h2>Let's get started!</h2>
        <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
        <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
        <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>

    </div>
  );
}

export default App;
