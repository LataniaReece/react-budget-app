import React, { useEffect, createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  expenseTransactions: [],
  incomeTransactions: [],
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('state'))) {
      dispatch({
        type: 'init_stored',
        payload: JSON.parse(localStorage.getItem('state')),
      });
    }
  }, []);

  useEffect(() => {
    if (state !== initialState) {
      localStorage.setItem('state', JSON.stringify(state));
    }
  }, [state]);

  //   Actions
  function deleteIncome(id) {
    dispatch({
      type: 'DELETE_INCOME',
      payload: id,
    });
  }

  function addIncome(income) {
    dispatch({
      type: 'ADD_INCOME',
      payload: income,
    });
  }
  function deleteExpense(id) {
    dispatch({
      type: 'DELETE_EXPENSE',
      payload: id,
    });
  }

  function addExpense(expense) {
    dispatch({
      type: 'ADD_EXPENSE',
      payload: expense,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        expenseTransactions: state.expenseTransactions,
        incomeTransactions: state.incomeTransactions,
        deleteIncome,
        addIncome,
        deleteExpense,
        addExpense,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
