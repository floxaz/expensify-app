import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = props => (
    <div>
       {props.expenses.length === 0 ? (
           <p>There are no expenses yet</p>
       ) : (
        props.expenses.map(expense => <ExpenseListItem key={expense.id} {...expense} />)
       )}
    </div>
);
// state is redux store we're passing
const mapStateToProps = state => {
    // here are the data this component can use
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

// HOC
export default connect(mapStateToProps)(ExpenseList);
