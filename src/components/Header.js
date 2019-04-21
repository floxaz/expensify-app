import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
    <header>
      <h1>Expensify</h1>
      <nav>
        <ul>
          <li><NavLink exact to="/" activeClassName="is-active">Dashboard</NavLink></li>
          <li><NavLink to="/create" activeClassName="is-active">Create expense</NavLink></li>
        </ul>
      </nav>
    </header>
);

export default Header;