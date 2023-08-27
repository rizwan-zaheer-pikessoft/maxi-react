import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "../UI/Card";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import '../ExpenseFilter/ExpenseFilter.css'
import {useState} from "react";

const Expenses = (props) => {
    console.log(props.items);
    const [filteredYear,setFilteredYear] = useState('2020');
    const onChangeYearFilter = (selectedYear)=>{
        setFilteredYear(selectedYear);
    }
    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter onSelected = {filteredYear} onChangeYearFilter={onChangeYearFilter}/>
                {props.items.map(expenseItem=><ExpenseItem key={expenseItem.id} title = {expenseItem.title} amount={expenseItem.amount} date={expenseItem.date}/>)}
            </Card>
        </div>
    )
}
export default Expenses;