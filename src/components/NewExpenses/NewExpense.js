import React from "react"
import './NewExpenses.css'
import ExpensesForm from "./ExpensesForm"

const NewExpense = () => {
    return (
        <div className="new-expense">
            <ExpensesForm />
        </div>
    )
};

export default NewExpense