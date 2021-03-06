export default (expenses = [{ amount: 0 }]) => {
    const reducer = (sum, currentAmount) => sum + currentAmount;
    return expenses.map(expense => expense.amount).reduce(reducer, 0);
};