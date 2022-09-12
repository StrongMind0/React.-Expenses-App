import React from "react";

import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'

const ExpensesList = (props) => {
    
    if (props.items.length === 0) {
       return <p className="expense-list__callback"> No Expenses Found </p>
    }
    
    return (
        <ul className="expense-list">
            {props.items.map((expense) => (
                <ExpenseItem
                    //  Always add key when mapping out list of data for react to identify(unique identifier) and arrange which one comes first
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </ul>
    )
}


export default ExpensesList;