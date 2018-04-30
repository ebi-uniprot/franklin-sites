import React from 'react';
import {
  Link,
} from 'react-router-dom';

const Header = () => (
  <div className="header">
    <h3>Franklin</h3>
    <ul className="">
      <li>
        <Link to="/">Home</Link>{' '}
      </li>
      <li>
        <Link to="/ui-components">UI components</Link>{' '}
      </li>
    </ul>
  </div>
);

export default Header;

