import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "../UI/Card";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import '../ExpenseFilter/ExpenseFilter.css'
import {useState} from "react";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const onChangeYearFilter = (selectedYear) => {
        setFilteredYear(selectedYear);
    }
    const filteredItems = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })
    let expenseContent = <p>No expense found.</p>
    if (filteredItems.length > 0) {
        expenseContent = filteredItems.map(expenseItem => <ExpenseItem
            key={expenseItem.id} title={expenseItem.title}
            amount={expenseItem.amount}
            date={expenseItem.date}/>)
    }
    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter onSelected={filteredYear} onChangeYearFilter={onChangeYearFilter}/>
                {expenseContent}
            </Card>
        </div>
    )
}
export default Expenses;