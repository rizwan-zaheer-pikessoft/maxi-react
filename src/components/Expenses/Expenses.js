import './Expenses.css';
import Card from "../UI/Card";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import '../ExpenseFilter/ExpenseFilter.css'
import {useState} from "react";
import ExpenseList from "./ExpenseList";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const onChangeYearFilter = (selectedYear) => {
        setFilteredYear(selectedYear);
    }
    const filteredItems = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })
    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter onSelected={filteredYear} onChangeYearFilter={onChangeYearFilter}/>
                <ExpenseList items={filteredItems}/>
            </Card>
        </div>
    )
}
export default Expenses;