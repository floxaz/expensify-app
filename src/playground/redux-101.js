//import React from 'react';
import {createStore} from 'redux';

// Action generators - functions that return action objects
const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});
// here if an object isn't passed, it will throw an error, because we want access a property of unexisting object,
const setCount = ({ count }) => ({ // that's what we need, we want to force user to pass an argument
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});

// Reducers
const countReducer = (state = { count: 0 }, action) => {
    switch(action.type) {
        case 'INCREMENT': 
          return {
              count: state.count + action.incrementBy
          };
        case 'DECREMENT':
          return {
              count: state.count - action.decrementBy,
          };
        case 'RESET':
          return {
              count: 0
          };
        case 'SET':
          return {
              count: action.count
          };
        default:
          return state;
    }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});
// if you call unsubscrobe(), which is a returned value of subscribe(), it will stop looking for changes
store.dispatch(incrementCount({incrementBy: 5}));

store.dispatch(incrementCount());

//unsubscribe();

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({decrementBy: 10}));

store.dispatch(setCount({count: 101}));
