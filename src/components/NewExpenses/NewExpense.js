import React, {useState} from "react"
import './NewExpenses.css'
import ExpensesForm from "./ExpensesForm"

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData)
    }

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    }


    return (
        <div className="new-expense">
            {!isEditing && (<button onClick={startEditingHandler}> Add new Expense </button>)}
            {isEditing && (<ExpensesForm onCancel={stopEditingHandler} onSaveExpenseData={ saveExpenseDataHandler } />)}
        </div>
    )
};

export default NewExpense