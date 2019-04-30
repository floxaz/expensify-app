import React from 'react';
import { connect } from 'react-redux';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpenseSummary = props => (
    <div>
      <p>Viewing {props.expenseCount} {props.expenseCount !== 1 ? 'expenses' : 'expense'} totalling {props.expensesTotal}</p>
    </div>
);

const mapStateToProps = state => ({
    expenseCount: state.expenses.length,
    expensesTotal: selectExpensesTotal(state.expenses)
});

export default connect(mapStateToProps)(ExpenseSummary);