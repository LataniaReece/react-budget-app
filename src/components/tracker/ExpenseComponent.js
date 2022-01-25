import React, { useState, useContext, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { GlobalContext } from '../../context/GlobalState';

const ExpenseComponent = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(null);

  const textInputEl = useRef(null);
  const amountInputEl = useRef(null);

  const { expenseTransactions, addExpense, deleteExpense } =
    useContext(GlobalContext);

  let totalExpenses;
  if (expenseTransactions && expenseTransactions.length > 0) {
    totalExpenses = expenseTransactions
      .map((expense) => expense.amount)
      .reduce((acc, item) => (acc += item), 0);
  } else {
    totalExpenses = 0;
  }

  const onSubmit = (e) => {
    e.preventDefault();

    const newExpense = {
      id: uuidv4(),
      text,
      amount: Number(amount),
    };

    addExpense(newExpense);

    setText('');
    setAmount('');

    textInputEl.current.blur();
    amountInputEl.current.blur();
  };

  const deleteHandler = (expense) => {
    if (
      window.confirm(
        `Are you sure you want to delete "${expense.text}" expense transaction for $${expense.amount}?`
      )
    ) {
      deleteExpense(expense.id);
    }
  };

  return (
    <div className='expense-widget'>
      <h4 className='finance-header'>Expenses</h4>
      <p className='finance-amount'>- ${totalExpenses}</p>
      <form className='tracker-form' onSubmit={onSubmit}>
        <div class='input-container'>
          <input
            type='text'
            name='text'
            id='expense-text'
            value={text}
            ref={textInputEl}
            onChange={(e) => setText(e.target.value)}
            required
          />
          <label for='expense-text'>Enter expense description</label>
        </div>
        <div class='input-container'>
          <input
            type='text'
            name='amount'
            id='expense-amount'
            value={amount}
            ref={amountInputEl}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
          <label for='expense-amount'>Enter expense amount</label>
        </div>
        <div class='input-container'>
          <input type='submit' value='submit' class='submit-btn' />
        </div>
      </form>
      <div className='finance-list'>
        <h4>Expense History</h4>
        <ul className='transactions'>
          {expenseTransactions &&
            expenseTransactions.map((expense) => {
              return (
                <li className='expense transaction-item'>
                  <p className='expense-item'>
                    {expense.text} <span>-${expense.amount}</span>
                  </p>
                  <i
                    class='fas fa-trash'
                    onClick={() => deleteHandler(expense)}
                  ></i>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default ExpenseComponent;
