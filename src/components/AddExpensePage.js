import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses';

export class AddExpensePage extends React.Component {
   constructor(props) {
      super(props);
   }

   onSubmit = expense => {
      //props.dispatch(addExpense(expense));
      this.props.addExpense(expense); // remove it if you don't use mapDispatchToProps
      this.props.history.push('/');
   };

   render() {
      return (<div>
         <h2>Add Expense</h2>
         <ExpenseForm
            onSubmit={this.onSubmit}
         />
      </div>)
   }
}

// we wrote this cuz it's easier to to test
const mapDispatchToProps = dispatch => ({
   addExpense: (expense) => dispatch(addExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);