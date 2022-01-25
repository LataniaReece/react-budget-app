export default (state, action) => {
  switch (action.type) {
    case 'init_stored':
      return action.payload;
    case 'DELETE_INCOME':
      return {
        ...state,
        incomeTransactions: state.incomeTransactions.filter(
          (income) => income.id !== action.payload
        ),
      };
    case 'ADD_INCOME':
      console.log(action.payload);
      return {
        ...state,
        incomeTransactions: [action.payload, ...state.incomeTransactions],
      };
    case 'DELETE_EXPENSE':
      return {
        ...state,
        expenseTransactions: state.expenseTransactions.filter(
          (expense) => expense.id !== action.payload
        ),
      };
    case 'ADD_EXPENSE':
      return {
        ...state,
        expenseTransactions: [action.payload, ...state.expenseTransactions],
      };
    default:
      return state;
  }
};
