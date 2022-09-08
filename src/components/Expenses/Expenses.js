import React, {useState} from 'react';

import './Expenses.css'
import ExpenseItem from "./ExpenseItem"
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

const Expense =(props)=> {
   
   const [filteredYear, setFilteredYear] = useState('2020');
   const filterChangeHandler = (enteredYear) => {
      setFilteredYear(enteredYear)
   }

    return (
       <div>
          <Card className="expenses">
             <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
             {props.items.map(expense => {
                return <ExpenseItem
                   title={expense.title}
                   amount={expense.amount}
                   date={expense.date} />
             })}
           </Card>
       </div>
    );
}

export default Expense