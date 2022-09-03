import React from "react"
import './NewExpenses.css'
import ExpensesForm from "./ExpensesForm"

const NewExpense = () => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        
        console.log(expenseData);
    }


    return (
        <div className="new-expense">
            <ExpensesForm onSaveExpenseData={ saveExpenseDataHandler } />
        </div>
    )
};

export default NewExpense