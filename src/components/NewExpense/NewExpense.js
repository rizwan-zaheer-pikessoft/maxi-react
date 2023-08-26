import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

export const NewExpense = (props) => {
    const onAddNewExpenseHandler = (newExpenseData)=>{
        props.newExpense({...newExpenseData,id:(Math.random()*100).toFixed(0)});
    }
    return (
        <div className="new-expense">
            <ExpenseForm onSaveNewExpenseData = {onAddNewExpenseHandler}/>
        </div>
    )
}
export default NewExpense;
