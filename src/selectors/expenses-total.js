import numeral from 'numeral';

export default (expenses = [{ amount: 0 }]) => {
    const reducer = (sum, currentAmount) => sum + currentAmount;
    return numeral(expenses.map(expense => expense.amount).reduce(reducer, 0) / 100).format('$0,0.00');
};