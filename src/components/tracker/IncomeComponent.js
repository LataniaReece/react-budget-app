import React, { useState, useContext, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { GlobalContext } from '../../context/GlobalState';

const IncomeComponent = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  const textInputEl = useRef(null);
  const amountInputEl = useRef(null);

  const { incomeTransactions, addIncome, deleteIncome } =
    useContext(GlobalContext);

  let totalIncome;
  if (incomeTransactions && incomeTransactions.length > 0) {
    totalIncome = incomeTransactions
      .map((income) => income.amount)
      .reduce((acc, item) => (acc += item), 0);
  } else {
    totalIncome = 0;
  }

  const onSubmit = (e) => {
    e.preventDefault();

    const newIncome = {
      id: uuidv4(),
      text,
      amount: Number(amount),
    };

    addIncome(newIncome);

    setText('');
    setAmount('');
    textInputEl.current.blur();
    amountInputEl.current.blur();
  };

  const deleteHandler = (income) => {
    if (
      window.confirm(
        `Are you sure you want to delete "${income.text}" income transaction for $${income.amount}?`
      )
    ) {
      deleteIncome(income.id);
    }
  };

  return (
    <div className='income-widget'>
      <h4 className='finance-header'>Income</h4>
      <p className='finance-amount'>+ ${totalIncome}</p>
      <form className='income tracker-form' onSubmit={onSubmit}>
        <div class='input-container'>
          <input
            type='text'
            name='income'
            id='income-text'
            value={text}
            ref={textInputEl}
            onChange={(e) => setText(e.target.value)}
            required
          />
          <label for='income-text'>Enter income description</label>
        </div>
        <div class='input-container'>
          <input
            type='text'
            name='amount'
            id='income-amount'
            value={amount}
            ref={amountInputEl}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
          <label for='income-amount'>Enter income amount</label>
        </div>
        <div class='input-container'>
          <input type='submit' value='submit' class='submit-btn' />
        </div>
      </form>
      <div className='finance-list'>
        <h4>Income History</h4>
        <ul className='transactions'>
          {incomeTransactions &&
            incomeTransactions.map((income) => {
              return (
                <li key={income.id} className='transaction-item'>
                  <p className='income-item'>
                    {income.text} <span>+${income.amount}</span>
                  </p>
                  <i
                    class='fas fa-trash'
                    onClick={() => deleteHandler(income)}
                  ></i>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default IncomeComponent;
