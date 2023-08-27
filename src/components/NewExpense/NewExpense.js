import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'
import {useState} from "react";

export const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const onAddNewExpenseHandler = (newExpenseData) => {
        props.newExpense({...newExpenseData, id: (Math.random() * 100).toFixed(0)});
    }
    const startEditingHandler = () => {
        setIsEditing(true);
    }
    const stopEditingHandler = () => {
        setIsEditing(false);
    }
    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveNewExpenseData={onAddNewExpenseHandler} onCancel={stopEditingHandler}/>}
        </div>
    )
}
export default NewExpense;
