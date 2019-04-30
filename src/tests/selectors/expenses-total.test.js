import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
    const total = selectExpensesTotal([]);
    expect(total).toBe('$0.00');
});

test('should correctly add up a single expense', () => {
    const total = selectExpensesTotal([expenses[0]]);
    expect(total).toBe('$1.95');
});

test('should correctly add up mupltiple expenses', () => {
    const total = selectExpensesTotal(expenses);
    expect(total).toBe('$1,141.95');
});

