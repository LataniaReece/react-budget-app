import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import IncomeComponent from '../components/tracker/IncomeComponent';
import ExpenseComponent from '../components/tracker/ExpenseComponent';
import { GlobalContext } from '../context/GlobalState';

const TrackerScreen = () => {
  const { expenseTransactions, incomeTransactions } = useContext(GlobalContext);

  let totalIncome;
  let totalExpenses;

  if (incomeTransactions && incomeTransactions.length > 0) {
    totalIncome = incomeTransactions
      .map((income) => income.amount)
      .reduce((acc, item) => (acc += item), 0);
  } else {
    totalIncome = 0;
  }

  if (expenseTransactions && expenseTransactions.length > 0) {
    totalExpenses = expenseTransactions
      .map((expense) => expense.amount)
      .reduce((acc, item) => (acc += item), 0);
  } else {
    totalExpenses = 0;
  }

  const balance = totalIncome - totalExpenses;

  return (
    <div className='tracker'>
      <div className='wrapper'>
        <Link className='home-btn' to='/'>
          <div>Go home</div>
        </Link>
        <div className='balance'>
          <h2 className='header'>Track your budget</h2>
          <h3 className='subheader'> Your Balance</h3>
          <p className='balance-amount'>${balance}</p>
        </div>
        <div className='flex-col'>
          <IncomeComponent />
          <ExpenseComponent />
        </div>
      </div>
    </div>
  );
};

export default TrackerScreen;
