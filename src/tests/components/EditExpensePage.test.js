import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage} from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let editExpenseSpy, removeExpenseSpy, historySpy, wrapper;

beforeEach(() => {
    editExpenseSpy = jest.fn();
    removeExpenseSpy = jest.fn();
    historySpy = { push: jest.fn() };

    wrapper = shallow(<EditExpensePage 
        expense={expenses[1]} 
        editExpense={editExpenseSpy}
        removeExpense={removeExpenseSpy}
        history={historySpy}
    />);
})

test('should render EditExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
    //wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    wrapper.find('ExpenseForm').simulate('submit', expenses[1]);
    expect(editExpenseSpy).toHaveBeenLastCalledWith(expenses[1].id, expenses[1]);
    expect(historySpy.push).toHaveBeenLastCalledWith('/');
});

test('should handle onClick', () => {
    //wrapper.find('button').prop('onClick')();
    wrapper.find('button').simulate('click');
    expect(removeExpenseSpy).toHaveBeenLastCalledWith({ id: expenses[1].id });
    expect(historySpy.push).toHaveBeenLastCalledWith('/');
});

