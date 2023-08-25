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
        <ExpenseItem expense={expenses[0]}></ExpenseItem>
        <ExpenseItem expense={expenses[1]}></ExpenseItem>
        <ExpenseItem expense={expenses[2]}></ExpenseItem>

    </div>
  );
}

export default App;
