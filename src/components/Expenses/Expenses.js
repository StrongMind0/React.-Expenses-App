import React, { useState } from 'react';

import './Expenses.css'
import ExpenseItem from "./ExpenseItem"
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

const Expenses =(props)=> {
   
   const [filteredYear, setFilteredYear] = useState('2020');
   const filterChangeHandler = (selectedYear) => {
      setFilteredYear(selectedYear)
   }
   const filteredExpenses = props.items.filter(expense => {
   return expense.date.getFullYear().toString() === filteredYear;
   }
   )


    return (
       <div>
          <Card className="expenses">
             <ExpensesFilter
                selected={filteredYear}
                onChangeFilter={filterChangeHandler}
             />
             {filteredExpenses.map((expense) => (
                <ExpenseItem
                  //  Always add key when mapping out list of data for react to identify(unique identifier) and arrange which one comes first
                   key={expense.id}
                   title={expense.title}
                   amount={expense.amount}
                   date={expense.date}
                />
             ))}
           </Card>
       </div>
    );
}

export default Expenses