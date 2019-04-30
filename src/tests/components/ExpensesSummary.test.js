import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../components/ExpensesSummary';
import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should render ExpenseSummary component with one expense', () => {
    const expenseCount = [expenses[0]].length;
    const expensesTotal = selectExpensesTotal([expenses[0]]);
    const wrapper = shallow(
    <ExpenseSummary 
        expenseCount={expenseCount} 
        expensesTotal={expensesTotal}
    />
    );
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseSummary component with two or more expenses', () => {
    const expenseCount = expenses.length;
    const expensesTotal = selectExpensesTotal(expenses);
    const wrapper = shallow(
    <ExpenseSummary 
        expenseCount={expenseCount} 
        expensesTotal={expensesTotal}
    />
    );
    expect(wrapper).toMatchSnapshot();
});
