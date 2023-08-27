import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "../UI/Card";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import '../ExpenseFilter/ExpenseFilter.css'
import {useState} from "react";

const Expenses = (props) => {
    const [filteredYear,setFilteredYear] = useState('2020');
    const onChangeYearFilter = (selectedYear)=>{
        setFilteredYear(selectedYear);
    }
    return (
        <div>
            <ExpenseFilter onSelected = {filteredYear} onChangeYearFilter={onChangeYearFilter}/>
            <Card className="expenses">
                <div>
                    <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date}></ExpenseItem>
                </div>
                <div>
                    <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date}></ExpenseItem>
                </div>
                <div>
                    <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date}></ExpenseItem>
                </div>
            </Card>
        </div>
    )
}
export default Expenses;