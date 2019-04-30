import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../components/ExpensesSummary';
import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should render ExpenseSummary component with no expenses', () => {
    const expenseCount = [].length;
    const expensesTotal = selectExpensesTotal([]);
    const wrapper = shallow(
    <ExpenseSummary 
        expenseCount={expenseCount} 
        expensesTotal={expensesTotal}
    />
    );
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseSummary component with expenses', () => {
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
