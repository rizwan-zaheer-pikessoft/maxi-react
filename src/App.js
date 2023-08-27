import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import {useState} from "react";

const INITIAL_EXPENSES =  [
    {
        id: 1,
        title: "Rent",
        amount: 1000.00,
        date: new Date(2023,2,23)
    },
    {
        id: 2,
        title: "Groceries",
        amount: 150.00,
        date: new Date(2022,3,12),
    },
    {
        id: 3,
        title: "Utilities",
        amount: 250.00,
        date:new Date(2021,2,9),
    },
];
function App() {
    const [expenses,setExpenses] = useState(INITIAL_EXPENSES);
    const addNewExpenseHandler = (expense)=>{
        setExpenses([...expenses,expense])
    }
  return (
    <div>
      <h2>Let's get started!</h2>
        <NewExpense newExpense = {addNewExpenseHandler}/>
        <Expenses items = {expenses}/>
    </div>
  );
}

export default App;
