import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

const ExpenseDashboardPage = () => (
    <div>This is from my dashboard component</div>
);

const AddExpensePage = () => (
    <div>This is from my add expense component</div>
);

const EditExpensePage = () => (
    <div>This is from my edit expense component</div>
);

const HelpPage = () => (
    <div>This is from my help expense component</div>
);

const NotFoundPage = () => (
    <div>
      404 - <Link to="/">Go home</Link>
    </div>
);

const Header = () => (
    <header>
      <h1>Expensify</h1>
      <nav>
        <ul>
          <li><NavLink exact to="/" activeClassName="is-active">Dashboard</NavLink></li>
          <li><NavLink to="/create" activeClassName="is-active">Create expense</NavLink></li>
          <li><NavLink to="/edit" activeClassName="is-active">Edit</NavLink></li>
          <li><NavLink to="/help" activeClassName="is-active">Help</NavLink></li>
        </ul>
      </nav>
    </header>
);

const routes = (
    <BrowserRouter>
      <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true}/>
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
      </div>
    </BrowserRouter>
);
  
ReactDOM.render(routes, document.getElementById('app'));