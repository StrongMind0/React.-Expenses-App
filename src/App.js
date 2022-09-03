import React from 'react';

import Expense from './components/Expenses/Expenses';
import NewExpense from './components/NewExpenses/NewExpense';

const App = () => {
  const expense = [
    {
      id: 'el',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14)
    },
    {
      id: 'e2',
      title: 'New Tv',
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    }
  ];
  
  const addExpenseHandler = expense => {
    console.log('In App.js')
    console.log(expense)
  }
  
  return (
      <div>
        <NewExpense onAddExpense={ addExpenseHandler} />
        <Expense items={expense}/>
      </div>
    );
  
  
  // Alternative to JSX using the react object
  // return React.createElement(
  //   'div', {},
  //     React.createElement('h2', {},),
  //     React.createElement(Expense, { items: expense })
  // );


}

export default App;
