import { createStore as reduxCreateStore } from 'redux';

const reducer = (state, action) => {
  if (action.type === 'UPDATE_BUDGET_TOTAL') {
    return Object.assign({}, state, { newBudgetTotal: action.newBudgetTotal });
  } else if (action.type === 'UPDATE_BUDGET_SPENT') {
    return Object.assign({}, state, { newBudgetSpent: action.newBudgetSpent });
  } else {
    return state;
  }
};

const initialState = {
  budgetTotal: 1000,
  budgetSpent: 500
};

const createStore = () => reduxCreateStore(reducer, initialState);

export default createStore;