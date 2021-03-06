import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

// ACTION GENERATORS
const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

const setStartDate = startDate => ({
    type: 'SET_START_DATE',
    startDate
});

const setEndDate = endDate => ({
    type: 'SET_END_DATE',
    endDate
});

// EXPENSES REDUCER
const expencesReducerDefaultState = [];
const expensesReducer = (state = expencesReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
          //return state.concat(action.expense);
          return [...state, action.expense];
        case 'REMOVE_EXPENSE':
          return state.filter(({ id }) => id !== action.id);
        case 'EDIT_EXPENSE':
          return state.map(expense => expense.id === action.id ? {...expense, ...action.updates} : expense);
        default:
          return state;
    }
};

// FILTERS REDUCER
const filtersReducerDefault = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};
const filtersReducer = (state = filtersReducerDefault, action) => {
    switch(action.type) {
        case 'SET_TEXT_FILTER':
          return { ...state, text: action.text };
        case 'SORT_BY_AMOUNT':
          return {...state, sortBy: 'amount'};
        case 'SORT_BY_DATE':
          return {...state, sortBy: 'date'};
        case 'SET_START_DATE':
          return {...state, startDate: action.startDate};
        case 'SET_END_DATE':
          return {...state, endDate: action.endDate};
        default:
          return state;
    }
};

// GET VISIBLE EXPENSES - here we're filtering expenses based on the set filters
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {

    return expenses.filter(expense => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if(sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if(sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
};

// THE STORE
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({description: 'rent', amount: 8000, createdAt: -21000}));
const expenseTwo = store.dispatch(addExpense({description: 'coffee', amount: 10000, createdAt: -1000}));
/*
store.dispatch(removeExpense({ id: expenseOne.expense.id }));
store.dispatch(editExpense(expenseTwo.expense.id, { description: 'drinks for party', amount: 5000 }));
*/
//store.dispatch(setTextFilter('ffe'));

//store.dispatch(setTextFilter());

//store.dispatch(sortByDate());
store.dispatch(sortByAmount());

//store.dispatch(setStartDate(0));
//store.dispatch(setStartDate());
//store.dispatch(setEndDate(1250));


// this is how the final state should look like after combining all the reducers
const demoState = {
    expenses: [{
        id: 'e3e2302wd3',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
};